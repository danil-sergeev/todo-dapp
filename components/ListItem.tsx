import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

type TProps = {
  caption: string;
  status: boolean;
  style: object;
  number: number;
  onPress: (arg: any) => any;
};

const ListItem = ({caption, status, style, onPress, number}: TProps) => {
  const backgroundColor = status ? '#FD7F4A' : '#f8f8f8';

  return (
    <TouchableOpacity style={[style, {backgroundColor}]} onPress={() => onPress(number)}>
      <View style={styles.listItemView}>
        <Text>{caption || 'test'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
