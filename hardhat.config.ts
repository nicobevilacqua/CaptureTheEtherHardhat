import '@nomicfoundation/hardhat-toolbox';
import { config } from 'dotenv';
config();

import '@nomiclabs/hardhat-etherscan';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-watcher';
import path from 'path';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: !!process.env.OPTIMIZER_ENABLED,
        runs: 1000,
      },
    },
  },

  networks: {
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
      forking: {
        enabled: !!process.env.USE_FORK,
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
        blockNumber: 13698020,
      },
    },

    rinkeby: {
      url: process.env.RINKEBY_URL || '',
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },

  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    gasPrice: process.env.GAS_PRICE,
    coinmarketcap: process.env.CMC_KEY,
    currency: 'USD',
    outputFile: process.env.TO_FILE ? path.resolve(__dirname, 'gasReporterOutput.json') : undefined,
  },

  watcher: {
    compile: {
      tasks: ['compile'],
      files: ['./contracts'],
      verbose: true,
    },

    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
