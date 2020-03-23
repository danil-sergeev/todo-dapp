/**
 * @format
 */
import React from 'react';
import {View} from 'react-native';
import {Drizzle} from '@drizzle/store';
import {DrizzleContext} from '@drizzle/react-plugin';

import Navigator from './navigations/';
import DrizzleWrapper from './components/DrizzleWrapper';


type Props = {
  drizzle: Drizzle;
};

const App = ({drizzle}: Props) => {
  return (
      <DrizzleContext.Provider drizzle={drizzle}>
          <DrizzleWrapper>
              <Navigator />
          </DrizzleWrapper>
      </DrizzleContext.Provider>
  );
};

export default App;
