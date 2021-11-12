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
      type === 'secondaryAccent'
        ? colors.button.secondaryAccent.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor:
      type === 'secondaryAccent'
        ? colors.button.secondaryAccent.border
        : colors.button.primary.border,
  }),
  label: type => ({
    color:
      type === 'secondaryAccent'
        ? colors.button.secondaryAccent.text
        : colors.button.primary.text,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 16 * 1.5,
    textTransform: 'capitalize',
    fontFamily: fonts.primary[600],
  }),
});
