import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Button = ({label}) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} activeOpacity={0.7}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.button.primary.background,
    paddingVertical: 14,
    borderRadius: 5,
    //     shadowColor: colors.accent,
    //     shadowOpacity: 0.6,
    //     shadowOffset: {
    //       height: 8,
    //       width: 0,
    //     },
    //     shadowRadius: 20,
  },
  label: {
    color: colors.button.text,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.primary[700],
  },
});
