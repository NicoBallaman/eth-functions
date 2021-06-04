const Web3 = require('web3');
const infuraApiKey = '';
let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/' + infuraApiKey));

// functions
let createAccount = async () => await web3.eth.accounts.create();
let getBalance = async (account) => await web3.eth.getBalance(account);
let signTransaction = async (tx, privateKey) => await web3.eth.accounts.signTransaction(tx, privateKey);
let sendTransaction = async (rawTransaction) => await web3.eth.sendSignedTransaction(rawTransaction);


const key = await createAccount();
/*
key = {
    address: '0xAff9d328E8181aE831Bc426347949EB7946A88DA',
    privateKey: '0x9fb71152b32cb90982f95e2b1bf2a5b6b2a53855eacf59d132a2b7f043cfddf5',
    signTransaction: [Function: signTransaction],
    sign: [Function: sign],
    encrypt: [Function: encrypt]
}
*/

const balanceInWei = await getBalance('0xAff9d328E8181aE831Bc426347949EB7946A88DA');
/*
300000000
*/

let newTransaction = {
    from: '0xAff9d328E8181aE831Bc426347949EB7946A88DA',
    gasPrice: '20000000000',
    gas: '42000',
    to: '0x22013fff98c2909bbFCcdABb411D3715fDB341eA',
    value: '1000000000000000000',
    data: ''
}
const signedTx = await signTransaction(newTransaction, '0x9fb71152b32cb90982f95e2b1bf2a5b6b2a53855eacf59d132a2b7f043cfddf5');
/*
signedTx = {
    messageHash: '0x91b345a38dc728dc06a43c49b92a6ac1e0e6d614c432a6dd37d809290a25aa6b',
    v: '0x2a',
    r: '0x14c20901a060834972a539d7b8ad1f23161c2144a2b66fbf567e37e963d64537',
    s: '0x3d2a0a818633a11832a5c48708a198af909eaf4884a7856c9ac9ed216d9b029c',
    rawTransaction: '0xf86c018504a817c80082a4109422013fff98c2909bbfccdabb411d3715fdb341ea880de0b6b3a7640000802aa014c20901a060834972a539d7b8ad1f23161c2144a2b66fbf567e37e963d64537a03d2a0a818633a11832a5c48708a198af909eaf4884a7856c9ac9ed216d9b029c'
}
*/
const transactionResult = await sendTransaction(signedTx.rawTransaction);
/*
transactionResult = {
    blockHash: '0x26f1e1374d11d4524f692cdf1ce3aa6e085dcc181084642293429eda3954d30e',
    blockNumber: 2514764,
    contractAddress: null,
    cumulativeGasUsed: 125030,
    from: '0xaff9d328e8181ae831bc426347949eb7946a88da',
    gasUsed: 21000,
    logs: [],
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    status: '0x1',
    to: '0x22013fff98c2909bbfccdabb411d3715fdb341ea',
    transactionHash: '0xd3f45394ac038c44c4fe6e0cdb7021fdbd672eb1abaa93eb6a1828df5edb6253',
    transactionIndex: 3
}
*/
