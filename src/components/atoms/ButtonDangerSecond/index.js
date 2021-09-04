import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Button = ({label, onPress, type}) => {
  return (
    <TouchableOpacity
      style={styles.buttonWrapper(type)}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.label(type)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.danger.background,
    paddingVertical: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:
      type === 'secondary'
        ? colors.button.secondary.border
        : colors.button.danger.border,
  }),
  label: type => ({
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.danger.text,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.primary[600],
  }),
});
