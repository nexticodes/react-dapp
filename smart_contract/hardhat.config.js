// Alchemy HTTP https://eth-ropsten.alchemyapi.io/v2/TfXwysxFtwsMys907wbwVYCXt_wYQtSN

require('@nomiclabs/hardhat-waffle');
require('dotenv').config({path:__dirname+'/.env'});

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TfXwysxFtwsMys907wbwVYCXt_wYQtSN',
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}