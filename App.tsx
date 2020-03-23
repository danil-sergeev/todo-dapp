/**
 * @format
 */
import React from 'react';
import {View} from 'react-native';
import {Drizzle} from '@drizzle/store';
import {DrizzleContext} from '@drizzle/react-plugin';

type Props = {
  drizzle: Drizzle;
};

const App = ({drizzle}: Props) => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
        <View />
    </DrizzleContext.Provider>
  );
};

export default App;
