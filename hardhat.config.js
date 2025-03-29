require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    seismicDevnet: {
      url: "https://node-2.seismicdev.net/rpc",
      chainId: 5124,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
