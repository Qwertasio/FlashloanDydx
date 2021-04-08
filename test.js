async function contract(address){
        var Web3 = require('web3');

        var web3 = new Web3('http://localhost:8545');
        var etherscan = require('etherscan-api').init('');
        var abi = await etherscan.contract.getabi(address);
        abi =JSON.parse(Object.values(abi)[2]);
        console.log(JSON.stringify(abi))
        return await new web3.eth.Contract(abi,address);
}
/*
async function contract(address){
    var ethers = 

require('ethers');
    const localhost = new ethers.providers.JsonRpcProvider();
    
    var etherscan = require('etherscan-api').init('');
    var abi = await etherscan.contract.getabi(address);
    abi =JSON.parse(Object.values(abi)[2]);
    console.log(await localhost.getBlockNumber())
    contract =  await new ethers.Contract(address,abi,localhost);
    return contract
}
*/
async function w(){
    try {
        var Web3 = require('web3');
        var web3 = new Web3('http://localhost:8545');
        var ethers = require('ethers');
        const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
        const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
        
        var account = (await web3.eth.getAccounts())[0]
        console.log
        //console.log(JSON.stringify(abi));
        //var UniswapPairFactoryContract = await contract('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f');
        
        //var uniswapContract= await contract('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
        //var UniswapSwapDepositContract = await contract('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
        var DAIContract = await contract(DAI);
        console.log(await DAIContract.methods.balanceOf(account).send({from:account,gas:100000}))
       


    } catch (e) {
        console.log(e.message);
    }
  };
  w();

