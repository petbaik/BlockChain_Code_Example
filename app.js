let Block = require('./block')
let Blockchain = require('./blockchain')
let Transcation = require('./transaction')


let transaction = new Transcation('Mary','Jerry',100);

let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)


let block = blockchain.getNextBlock([transaction])

blockchain.addBlock(block)


let anotherTranscation = new Transcation("Azam","Jerry",10)

let block1 = blockchain.getNextBlock([anotherTranscation,transaction])

blockchain.addBlock(block1)

console.log(blockchain)

