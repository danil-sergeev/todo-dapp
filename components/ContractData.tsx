import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {DrizzleContext} from '@drizzle/react-plugin';

type TProps = {
  contract: string;
  method: string;
  render: (data: any) => JSX.Element;
  methodArgs?: any[];
};

const ContractData = ({
  contract,
  method,
  render,
  methodArgs = [],
}: TProps) => {
  const {drizzle, drizzleState} = React.useContext(DrizzleContext.Context);

  const [dataKey, setDataKey] = React.useState(() => {
    return drizzle.contracts[contract].methods[method].cacheCall(...methodArgs);
  });

  React.useMemo(() => {
    setDataKey(
      drizzle.contracts[contract].methods[method].cacheCall(...methodArgs),
    );
  }, [contract, drizzle.contracts, method, methodArgs]);

  const renderLoader = () : JSX.Element => <ActivityIndicator size="small" style={styles.loader} />;

  if (drizzleState.drizzleStatus && !drizzleState.drizzleStatus.initialized) {
    return renderLoader();
  }
  if (!drizzleState.contracts[contract].initialized) {
    return renderLoader()
  }

  if (!(dataKey in drizzleState.contracts[contract][method])) {
    return renderLoader();
  }

  const data =
    drizzleState.contracts[contract][method][dataKey] &&
    drizzleState.contracts[contract][method][dataKey].value;

  return render(data);
};

const styles = StyleSheet.create({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default React.memo(ContractData);
