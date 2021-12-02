import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '..';

const TextInput = ({
  label,
  placeholder,
  height,
  multiline,
  textAlignVertical,
  ...restProps
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={5} />
      <TextInputRN
        style={styles.input(height)}
        placeholder={placeholder}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textTransform: 'capitalize',
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
  input: height => ({
    borderWidth: 1,
    borderColor: colors.blackSecondary,
    borderRadius: 5,
    paddingHorizontal: 15,
    height: height,
  }),
});
