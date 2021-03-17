import SansABI from './sanskritiABI'
const Web3 = require('web3')

let metamaskWeb3 = new Web3('http://localhost:8545')
let account = null
let airbnbContract
let airbnbContractAddress = '0xB9ad9B0e046aDC38e9C9B8BA308dC77B7e8E3E23' // Paste Contract address here

export function web3() {
  return metamaskWeb3
}

export const accountAddress = () => {
  return account
}

export async function setProvider() {
  // TODO: get injected Metamask Object and create Web3 instance
  if (window.ethereum) {
    metamaskWeb3 = new Web3(ethereum)
    try {
      // Request account access if needed
      await ethereum.enable()
    } catch (error) {
      // User denied account access...
    }
  } else if (window.web3) {
    metamaskWeb3 = new Web3(web3.currentProvider)
  }
  account = await metamaskWeb3.eth.getAccounts()

}


function getAirbnbContract() {
  // TODO: create and return contract Object
  airbnbContract =
  airbnbContract ||
  new metamaskWeb3.eth.Contract(SansABI.abi, airbnbContractAddress)
return airbnbContract

}


export async function postProperty(name, description,upiID, price) {
  // TODO: call Airbnb.rentOutproperty
  const prop = await getAirbnbContract()
  .methods.rentOutproperty(name, description,upiID, price)
  .send({
    from: account[0],
  })
  alert('Product Posted Successfully')
}

export async function bookProperty(spaceId, quantity, totalPrice) {
  // TODO: call Airbnb.rentSpace
  const prop = await getAirbnbContract()
  .methods.buyProduct(spaceId, quantity)
  .send({
    from: account[0],
  })
  alert('Product Booked Successfully pay '+totalPrice+' to the given UPI ID')
}

export async function fetchAllProperties() {
  // TODO: call Airbnb.propertyId
  
  const propertyId = await getAirbnbContract()
  .methods.propertyId()
  .call()
// iterate till property Id
const properties = []
for (let i = 0; i < propertyId; i++) {
  const p = await airbnbContract.methods.properties(i).call()
  properties.push({
    id: i,
    name: p.name,
    description: p.description,
    upiID : p.upiID,
    price: p.price,
  })
}
return properties
// push each object to properties array
}
