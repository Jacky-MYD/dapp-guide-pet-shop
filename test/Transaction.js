var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
web3.eth.getTransaction('0x23dc7ea08486c02806fa9085c7b85e1ce7145e5497267babd5a67101927abd55')
.then(console.log);

var receipt = web3.eth.getTransactionReceipt('0x23dc7ea08486c02806fa9085c7b85e1ce7145e5497267babd5a67101927abd55')
.then(console.log);