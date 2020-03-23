import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DetailNavProp, DetailRouteProp} from '../types';
import TaskStatusForm from '../components/TaskStatusForm';
import TaskDetail from '../components/TaskDetail';
import ContractData from '../components/ContractData';
import {formatSolidityResponse} from '../utils';

type TProps = {
  route: DetailRouteProp;
  navigation: DetailNavProp;
};

const DetailScreen = ({route, navigation}: TProps) => {
  const {itemId} = route.params;

  const memoArgs = React.useMemo(() => [itemId], [itemId]);

  const renderTask = React.useCallback(
    (item: string[]) => {
      const {caption, description, number, status} = formatSolidityResponse(
        item,
      );
      return (
        <View style={styles.container}>
          <TaskDetail
            caption={caption}
            description={description}
            number={number}
          />
          <TaskStatusForm
            status={!!status}
            sendArgs={memoArgs}
            navigation={navigation}
          />
        </View>
      );
    },
    [memoArgs, navigation],
  );

  return (
    <ContractData
      contract="Tasks"
      method="getTask"
      methodArgs={memoArgs}
      render={renderTask}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;
