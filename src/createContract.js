const Web3 = require('web3');
const infuraApiKey = '';
let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/' + infuraApiKey));


// Create and send te contract
const helloworldContract = new web3.eth.Contract([
    {
        'constant': true,
        'inputs': [],
        'name': 'Hello',
        'outputs': [
            {
                'name': '',
                'type': 'string'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    }
]);

const contract = await helloworldContract.deploy({
        data: '0x6060604052341561000f57600080fd5b6040805190810160405280600c81526020017f48656c6c6f20576f726c642100000000000000000000000000000000000000008152506000908051906020019061005a929190610060565b50610105565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a157805160ff19168380011785556100cf565b828001600101855582156100cf579182015b828111156100ce5782518255916020019190600101906100b3565b5b5090506100dc91906100e0565b5090565b61010291905b808211156100fe5760008160009055506001016100e6565b5090565b90565b6101bc806101146000396000f300606060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063bcdfe0d514610046575b600080fd5b341561005157600080fd5b6100596100d4565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009957808201518184015260208101905061007e565b50505050905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100dc61017c565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101725780601f1061014757610100808354040283529160200191610172565b820191906000526020600020905b81548152906001019060200180831161015557829003601f168201915b5050505050905090565b6020604051908101604052806000815250905600a165627a7a72305820877a5da4f7e05c4ad9b45dd10fb6c133a523541ed06db6dd31d59b35d51768a30029'}) .send({
        from: '0xAff9d328E8181aE831Bc426347949EB7946A88DA',
        gas: 4700000,
        gasPrice: '20000000000000'
    },
    function(error, transactionHash){
        console.log(error);
        console.log(transactionHash);
    });


// Wrap the contract inside a transaction
const tx = {
        from: "0x22013fff98c2909bbFCcdABb411D3715fDB341eA",
        gasPrice: "20000000000",
        gas: "4900000",
        data: "0x6060604052341561000f57600080fd5b6040805190810160405280600c81526020017f48656c6c6f20576f726c642100000000000000000000000000000000000000008152506000908051906020019061005a929190610060565b50610105565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a157805160ff19168380011785556100cf565b828001600101855582156100cf579182015b828111156100ce5782518255916020019190600101906100b3565b5b5090506100dc91906100e0565b5090565b61010291905b808211156100fe5760008160009055506001016100e6565b5090565b90565b6101bc806101146000396000f300606060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063bcdfe0d514610046575b600080fd5b341561005157600080fd5b6100596100d4565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009957808201518184015260208101905061007e565b50505050905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100dc61017c565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101725780601f1061014757610100808354040283529160200191610172565b820191906000526020600020905b81548152906001019060200180831161015557829003601f168201915b5050505050905090565b6020604051908101604052806000815250905600a165627a7a72305820877a5da4f7e05c4ad9b45dd10fb6c133a523541ed06db6dd31d59b35d51768a30029"
};
const signedTx = await web3.eth.accounts.signTransaction(tx, '0xc6676b7262dab1a3a28a781c77110b63ab8cd5eae2a5a828ba3b1ad28e9f5a9b')
await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
/*
{
    blockHash: '0xaba93b4561fc35e062a1ad72460e0b677603331bbee3379ce6c74fa5cf505d82',
    blockNumber: 2539889,
    contractAddress: '0xd5a2d13723A34522EF79bE0f1E7806E86a4578E9',
    cumulativeGasUsed: 205547,
    from: '0x22013fff98c2909bbfccdabb411d3715fdb341ea',
    gasUsed: 205547,
    logs: [],
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    status: '0x1',
    to: null,
    transactionHash: '0xc333cbc5fc93b52871689aab22c48b910cb192b4875bea69212363030d36565a',
    transactionIndex: 0
}
/// while the value of the “to” property is null. This means that this was a contract creation transaction
/// that was successfully mined on the network and the contract created as part of this transaction is deployed
*/