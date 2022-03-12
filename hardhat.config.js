require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const infuraId = JSON.parse(fs.readFileSync(".infuraid").toString().trim() || "");
const mnemonic = JSON.parse(fs.readFileSync(".secret").toString().trim() || "");

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    // hardhat: {
    //   chainId: 1337
    // },
    rinkeby: {
      // Infura
      url: `https://rinkeby.infura.io/v3/${infuraId}`,
      //url: "https://rpc-mumbai.matic.today",
      accounts: [`${mnemonic}`],
    },
    // matic: {
    //   // Infura
    //   url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
    //   //url: "https://rpc-mainnet.maticvigil.com",
    //   accounts: [privateKey]
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

