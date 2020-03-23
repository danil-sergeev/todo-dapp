import React from 'react';
import {Text, StyleSheet} from 'react-native';

type TProps = {
  caption: string;
  description: string;
  number: number;
};

const TaskDetail = ({caption, description, number: id}: TProps) => {
  return (
    <>
      <Text style={styles.textRow}>Id: {id}</Text>
      <Text style={styles.textRow}>Caption: {caption}</Text>
      <Text style={styles.textRow}>Description: {description}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  textRow: {
    width: 150,
    padding: 10,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default TaskDetail;
