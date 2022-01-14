const hre = require('hardhat');
const { utils } = require('ethers');

async function main() {
  // Get owner/deployer's wallet address
  const [owner] = await hre.ethers.getSigners();

  // Get contract that we want to deploy
  const SoccerSol = await hre.ethers.getContractFactory('SoccerSol');
  const soccerSol = await SoccerSol.deploy();
  await soccerSol.deployed();
  console.log('soccerSol deployed to:', soccerSol.address);

  // let txn = await soccerSol.mintPresale(1, {
  //   value: utils.parseEther('0.00048'),
  //   gasPrice: 50000000000,
  // });
  // await txn.wait();

  // Get all token IDs of the owner
  // let tokens = await soccerSol.tokensOfOwner(owner.address);
  // console.log('Owner has tokens: ', tokens);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
