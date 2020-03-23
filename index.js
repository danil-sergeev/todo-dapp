/**
 * @format
 */
// import 'react-native-polyfill';
import './shims';

import {AppRegistry} from 'react-native';
import React from 'react';
import {Drizzle, generateStore} from '@drizzle/store';

import App from './App';
import Tasks from './build/contracts/Tasks.json';
import {name as appName} from './app.json';

const options = {
  contracts: [Tasks],
  polls: {
    accounts: 10000,
    blocks: 10000,
  },
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545',
    },
  },
};

const drizzleStore = generateStore({ drizzleOptions: options });
const drizzle = new Drizzle(options, drizzleStore);

AppRegistry.registerComponent(appName, () => () => <App drizzle={drizzle} />);
