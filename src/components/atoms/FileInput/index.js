import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {IcDownload} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const FileInput = ({label, onPress, namefile}) => {
  // console.log(namefile[0].name);
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <Gap height={5} />
      <View style={styles.formInputWrapper}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <View style={styles.buttonWrapper}>
            <IcDownload />
          </View>
        </TouchableOpacity>
        {namefile != null ? (
          <View style={styles.descFile}>
            <Text style={styles.textNameFile}>{namefile[0].name}</Text>
          </View>
        ) : (
          <Text style={styles.textNameFile}>pilih file</Text>
        )}
      </View>
    </View>
  );
};

export default FileInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
  formInputWrapper: {
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: colors.blackPrimary,
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  buttonWrapper: {
    backgroundColor: colors.button.primary.background,
    padding: 15,
    borderRadius: 5,
  },
  descFile: {
    alignItems: 'center',
    marginTop: 5,
  },
  textNameFile: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    marginTop: 5,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
});
