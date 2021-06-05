const Web3 = require('web3');
const infuraApiKey = '';
let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/' + infuraApiKey));

// get reference to smart contract
let helloworldContract = new web3.eth.Contract([{
        'constant': true,
        'inputs': [],
        'name': 'Hello',
        'outputs': [{
            'name': '',
            'type': 'string'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    }],
    '0xd5a2d13723A34522EF79bE0f1E7806E86a4578E9'
);

// execute smart contract function
helloworldContract.methods.Hello().send({from: '0xF68b93AE6120aF1e2311b30055976d62D7dBf531'})
.then(console.log);

// execute smart contract function by raw transaction
let callFunctionContract = async () => {
    let payload = helloworldContract.methods.Hello().
    encodeABI();
    var tx = {
        from: '0xF68b93AE6120aF1e2311b30055976d62D7dBf531',
        gasPrice: '20000000000',
        gas: '4700000',
        data: payload
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, '0xc6676b7262dab1a3a28a781c77110b63ab8cd5eae2a5a828ba3b1ad28e9f5a9b')
    const transaction = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    return transaction;
};

