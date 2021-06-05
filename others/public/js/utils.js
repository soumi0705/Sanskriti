var EdABI = [{
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "buyinId",
                "type": "uint256"
            }
        ],
        "name": "NewBooking",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
        }],
        "name": "NewProduct",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_pmode",
                "type": "string"
            }
        ],
        "name": "buyProduct",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "buyinId",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "buyins",
        "outputs": [{
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "pmode",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "upiID",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "listProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
        }],
        "name": "markProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "productId",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "products",
        "outputs": [{
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "upiID",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
];

// const Web3 = require('web3');
let metamaskWeb3 = new Web3('http://localhost:8545');
//let metamaskWeb3 = new Web3('https://rpc-mumbai.matic.today')
let account = null;
let sanskritiContract;
let sanskritiContractAddress = '0xC5534dbea291d7aA3e6260d47746842FC22D0413'; // Paste Contract address here

function web3() {
    return metamaskWeb3;
}

const accountAddress = () => {
    return account;
}

async function setProvider() {
    // TODO: get injected Metamask Object and create Web3 instance
    if (window.ethereum) {
        metamaskWeb3 = new Web3(ethereum)
        try {
            // Request account access if needed
            await ethereum.request('eth_requestAccounts')
        } catch (error) {
            // User denied account access...
        }
    } else if (window.web3) {
        metamaskWeb3 = new Web3(web3.currentProvider)
    }
    account = await metamaskWeb3.eth.getAccounts()

}


function getEdlanceContract() {
    // TODO: create and return contract Object
    edlanceContract = edlanceContract || new metamaskWeb3.eth.Contract(EdABI, edlanceContractAddress)
    return edlanceContract
}

// async function buyProduct(pId, quantity, totalPrice, pmode) {
//   // TODO: call Airbnb.rentSpace
//   if(pmode == "t"){
//     //web3().utils.toWei(this.propData.price, 'ether')
//     const pay = Math.round((totalPrice/134017)*Math.pow(10,7))/Math.pow(10,7)
//     totalPrice = (metamaskWeb3.utils.toWei(pay.toString(), 'ether'))
//     console.log(totalPrice);
//     const prop = await getSanskritiContract()
//     .methods.buyProduct(pId, quantity, pmode)
//     .send({
//       from: account[0],
//       value: totalPrice,
//     })
//     alert('Product Bought Successfully')

//     }
//   if(pmode == "f"){
//     const prop = await getSanskritiContract()
//     .methods.buyProduct(pId, quantity, pmode)
//     .send({
//       from: account[0],
//     })
//     alert('Product Booked Successfully pay '+totalPrice+' to the given UPI ID')
//     window.location.href="http://localhost:5000/payINR?amt="+totalPrice;
//     }
//   }



// async function markProduct(pId){
//   const prop = await getSanskritiContract()
//   .methods.markProduct(pId)
//   .send({
//     from: account[0],
//   })
//}