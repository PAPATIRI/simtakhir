import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcArrowBack, IcFilter} from '../../../assets';
import {colors} from '../../../utils';

const searchFilter = text => {
  if (text) {
    const newData = '';
  }
};

const TopNavbarSearch = ({onPress, valuesearch}) => {
  return (
    <View style={styles.navWrapper}>
      <TouchableOpacity
        style={styles.iconLeft}
        activeOpacity={0.7}
        onPress={onPress}>
        <IcArrowBack />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="cari topik dosen"
        value={valuesearch}
        onChangeText={text => searchFilter(text)}
      />
    </View>
  );
};

export default TopNavbarSearch;

const styles = StyleSheet.create({
  navWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 16,
    height: 56,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  iconLeft: {
    padding: 5,
  },
  input: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
});
