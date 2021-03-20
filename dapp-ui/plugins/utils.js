import SansABI from './sanskritiABI'
const Web3 = require('web3')

let metamaskWeb3 = new Web3('http://localhost:8545')
//let metamaskWeb3 = new Web3('https://rpc-mumbai.matic.today')
let account = null
let sanskritiContract
let sanskritiContractAddress = '0x8bF81B3F5DD785B9807970a3d28e30904a7a692E' // Paste Contract address here

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


function getSanskritiContract() {
  // TODO: create and return contract Object
  sanskritiContract =  sanskritiContract ||  new metamaskWeb3.eth.Contract(SansABI.abi, sanskritiContractAddress)
return sanskritiContract
}


export async function postProduct(name, description,upiID, price) {
  // TODO: call Airbnb.rentOutproperty
  const prop = await getSanskritiContract()
  .methods.listProduct(name, description,upiID, price)
  .send({
    from: account[0],
  })
  // alert('Product Posted Successfully')
  location.reload();
}

export async function buyProduct(pId, quantity, totalPrice, pmode) {
  // TODO: call Airbnb.rentSpace
  if(pmode == "t"){
    //web3().utils.toWei(this.propData.price, 'ether')
    totalPrice = (metamaskWeb3.utils.toWei((totalPrice/134017).toString(), 'ether'))
    console.log(totalPrice);
    const prop = await getSanskritiContract()
    .methods.buyProduct(pId, quantity, pmode)
    .send({
      from: account[0],
      value: totalPrice,
    })
    alert('Product Bought Successfully')
    }
  if(pmode == "f"){
    const prop = await getSanskritiContract()
    .methods.buyProduct(pId, quantity, pmode)
    .send({
      from: account[0],
    })
    alert('Product Booked Successfully pay '+totalPrice+' to the given UPI ID')
    }
  }

export async function fetchAllProducts() {
  // TODO: call Airbnb.propertyId
  
  const productId = await getSanskritiContract()
  .methods.productId()
  .call()
// iterate till property Id
const products = []
for (let i = 0; i < productId; i++) {
  const p = await sanskritiContract.methods.products(i).call()
  products.push({
    id: i,
    name: p.name,
    description: p.description,
    upiID : p.upiID,
    price: p.price,
    isActive: p.isActive,
  })
}
return products
// push each object to properties array
}

export async function markProduct(pId){
  const prop = await getSanskritiContract()
  .methods.markProduct(pId)
  .send({
    from: account[0],
  })
}
