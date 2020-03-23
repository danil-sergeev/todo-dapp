import React from 'react';
import {StyleSheet, Button, Text} from 'react-native';
import {DrizzleContext} from '@drizzle/react-plugin';
import CheckBox from './CheckBox';
import {DetailNavProp} from '../types';

type TProps = {
  sendArgs: object;
  status: boolean;
  navigation: DetailNavProp;
};

const TaskStatusForm = ({status, sendArgs, navigation}: TProps) => {
  const {drizzle} = React.useContext(DrizzleContext.Context);
  const [selected, setSelected] = React.useState(status);
  const onSelect = (): void => setSelected(!selected);
  const onSubmit = (): void => {
    drizzle.contracts.Tasks.methods.completeTask.cacheSend(sendArgs);
    return navigation.push('List');
  };

  const onReturnSubmit = (): void => navigation.goBack();

  return (
    <>
      {status ? (
        <>
          <Text style={styles.completedText}>Task is completed!</Text>
          <Button title="Return" onPress={onReturnSubmit} />
        </>
      ) : (
        <>
          <CheckBox selected={selected} onPress={onSelect} />
          <Button title="Complete" disabled={!selected} onPress={onSubmit} />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 200,
    borderRadius: 20,
  },
  completedText: {
    fontSize: 18,
    color: 'green',
  },
});

export default TaskStatusForm;
