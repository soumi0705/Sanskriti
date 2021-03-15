pragma solidity ^0.7.4;

contract Sanskriti {
  // INSERT struct Property
  struct Product {
  string name;
  string description;
  string upiID;
  bool isActive; // is property active
  uint256 price; 
  address owner; // Owner of the property

}

  // Unique and sequential propertyId for every new property
  uint256 public productId;

  // mapping of propertyId to Property object
  mapping(uint256 => Product) public products;

  // INSERT struct Booking

  struct Buyin {
    uint256 propertyId;
    uint256 quantity;
    address user;
  }

  uint256 public bookingId;

  // mapping of bookingId to Booking object
  mapping(uint256 => Buyin) public buyins;

  // This event is emitted when a new property is put up for sale
  event NewProduct (
    uint256 indexed productId
  );

  // This event is emitted when a NewBooking is made
  event NewBooking (
    uint256 indexed productId,
    uint256 indexed bookingId
  );

  /**
    * @dev Put up your funky space on the market
    * @param name Name of the property
    * @param description Short description of your property
    * @param price Price per day in wei (1 ether = 10^18 wei)
    */
function rentOutproperty(string memory name, string memory description,string memory upiID, uint256 price) public {
  Property memory property = Property({
    name: name,
    description: description,
    upiID: upiID,
    isActive: true,
    price: price,
    owner: msg.sender
  });

  // Persist `property` object to the "permanent" storage
  properties[propertyId] = property;

  // emit an event to notify the clients
  emit NewProperty(propertyId++);
}
  /**
   * @dev Make an Airbnb booking
   * @param _propertyId id of the property to rent out
   */
  function buyProduct(uint256 _propertyId, uint256 quantity) public{
    // Retrieve `property` object from the storage
    Property storage property = properties[_propertyId];

    // Assert that property is active
    // Assert that property is active
    require(
      property.isActive == true,
      "Product with this ID is not available"
    );    
  
    // conditions for a booking are satisfied, so make the booking
    _createBooking(_propertyId, quantity);
  }

  function _sendFunds (address beneficiary, uint256 value) internal {
    // address(uint160()) is a weird solidity quirk
    // Read more here: https://solidity.readthedocs.io/en/v0.5.10/050-breaking-changes.html?highlight=address%20payable#explicitness-requirements
    address(uint160(beneficiary)).transfer(value);
  }

  function _createBooking(uint256 _propertyId, uint256 quantity) internal {
    // Create a new booking object
    Booking memory booking = Booking({
      propertyId: _propertyId,
      quantity : quantity,
      user: msg.sender
    });

    // persist to storage
    bookings[bookingId] = booking;


    

    // Emit an event to notify clients
    emit NewBooking(_propertyId, bookingId++);
  }

  /**
   * @dev Take down the property from the market
   * @param _propertyId Property ID
   */
  function markPropertyAsInactive(uint256 _propertyId) public {
    require(
      properties[_propertyId].owner == msg.sender,
      "THIS IS NOT YOUR PROPERTY"
    );
    properties[_propertyId].isActive = false;
  }
}