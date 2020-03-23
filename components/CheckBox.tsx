import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type TProps = {
  selected: boolean;
  onPress: any;
  style?: object;
  textStyle?: object;
  size?: number;
  color?: string;
  text?: string;
};

const CheckBox = ({
  selected,
  onPress,
  style,
  textStyle,
  size = 30,
  color = '#211f30',
  text = '',
}: TProps) => {
  return (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress}>
      <Icon
        size={size}
        color={color}
        name={selected ? 'check-box' : 'check-box-outline-blank'}
      />
      <Text style={textStyle}> {text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBox;
