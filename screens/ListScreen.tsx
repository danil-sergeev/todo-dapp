import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {ListNavProp} from '../types';
import ContractData from '../components/ContractData';
import ListItem from '../components/ListItem';
import {formatSolidityResponse} from '../utils';

type TProps = {
  navigation: ListNavProp;
};

export default function ListScreen({navigation}: TProps): JSX.Element {
  const itemsRef = React.useRef();
  const [limit, setLimit] = React.useState(6);
  const [idxToScroll, setIdxScroll] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const onSelect = React.useCallback(
    (id: number) =>
      navigation.push('Detail', {
        itemId: id,
      }),
    [navigation],
  );

  const memoArgs = React.useMemo(() => [limit], [limit]);
  const loadMore = React.useCallback(() => {
    if (limit !== 30) {
      setLoading(true);
      setLimit(prevState => (prevState += 6));
      setIdxScroll(limit - 6);
      setLoading(false);
    }
  }, [limit]);

  const renderRow = React.useCallback(
    (item: string[]) => {
      const {caption, status, number} = formatSolidityResponse(item);
      return (
        <ListItem
          caption={caption}
          status={!!status}
          number={number}
          style={styles.listItem}
          onPress={onSelect}
        />
      );
    },
    [onSelect],
  );

  const renderList = React.useCallback(
    (dataArray: any) => {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            ref={itemsRef}
            data={dataArray}
            keyExtractor={(item: any[]) => item[4].toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={() => <ActivityIndicator size="small" />}
            renderItem={({item}) => renderRow(item)}
            initialScrollIndex={idxToScroll}
            onEndReached={loadMore}
            getItemLayout={(data, index) => ({
              length: 200,
              offset: 200 * index,
              index,
            })}
            onEndReachedThreshold={0}
          />
        </SafeAreaView>
      );
    },
    [idxToScroll, loadMore, renderRow],
  );

  if (loading) {
    return <ActivityIndicator size="small" style={styles.loader} />;
  }

  return (
    <ContractData
      contract="Tasks"
      method="getTasks"
      methodArgs={memoArgs}
      render={renderList}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  listItem: {
    padding: 15,
    height: 200,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  container: {
    flex: 1,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
