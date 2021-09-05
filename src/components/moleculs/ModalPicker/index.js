import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const ModalPicker = ({value, setValue, items}) => {
  const pickerData = data => {
    return (
      data?.length > 0 &&
      data.map((val, index) => {
        return <Picker.Item label={`${val}`} value={`${val}`} key={index} />;
      })
    );
  };

  return (
    <Picker
      selectedValue={value}
      mode="dialog"
      style={styles.picker}
      onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
      {pickerData(items)}
    </Picker>
  );
};

export default ModalPicker;

const styles = StyleSheet.create({
  picker: {
    width: '100%',
    backgroundColor: colors.primary,
  },
});
