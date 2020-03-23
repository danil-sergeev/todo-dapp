import React from 'react';
import {DrizzleContext} from '@drizzle/react-plugin';
import {ActivityIndicator} from 'react-native';

type TProps = {
  children: JSX.Element;
};

export default function DrizzleWrapper(props: TProps) {
  const {drizzleState, initialized} = React.useContext(DrizzleContext.Context);
  if (!initialized || !drizzleState.drizzleStatus.initialized) {
    return <ActivityIndicator size="small" />;
  } else {
    return <>{props.children}</>;
  }
}
