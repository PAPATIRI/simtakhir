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

const TopNavbarSearch = ({onPress}) => {
  return (
    <View style={styles.navWrapper}>
      <TouchableOpacity
        style={styles.iconLeft}
        activeOpacity={0.7}
        onPress={onPress}>
        <IcArrowBack />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="cari topik dosen" />
      <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
        <Text style={styles.filterText}>filter</Text>
        <IcFilter />
      </TouchableOpacity>
    </View>
  );
};

export default TopNavbarSearch;

const styles = StyleSheet.create({
  navWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 6,
    paddingRight: 16,
    justifyContent: 'space-between',
  },
  iconLeft: {
    flex: 1,
  },
  input: {
    flex: 4,
    backgroundColor: colors.primary,
    borderRadius: 5,
    height: 35,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  filterBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.blackSecondary,
    height: 35,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  filterText: {
    color: colors.text.white,
    textAlign: 'center',
    marginRight: 5,
  },
});
