require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
// const projectId = "0dac5f60805048078a2d32218deab67c";

module.exports = {
  solidity: '0.8.4',
  defaultNetwork: 'rinkeby',
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/nx7YqOQ4qLJxy7aQBxRmndWblXLe-bOn",
      accounts: ["a1151f62e1e85584f739f5c5ad4993051bce7c467434bfcad8cca54b5724e27c"],
      // timeout: 300000
    },
  },
  // etherscan: {
  //   apiKey: ETHERSCAN_API,
  // },
};
