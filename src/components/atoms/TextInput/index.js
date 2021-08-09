import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {colors} from '../../../utils';
import {Gap} from '..';

const TextInput = ({
  label,
  placeholder,
  height,
  multiline,
  textAlignVertical,
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
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.primary,
  },
  input: height => ({
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    paddingHorizontal: 15,
    height: height,
  }),
});
