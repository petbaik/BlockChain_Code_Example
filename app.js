let Block = require('./block')
let Blockchain = require('./blockchain')
let Transcation = require('./transaction')


let transcation = new Transcation('Mary','Jerry',100);

let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)

console.log(blockchain)

