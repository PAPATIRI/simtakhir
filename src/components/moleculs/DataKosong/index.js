import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../..';
import {IlEmptyList} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DataKosong = ({title, desc}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.ilustrationWrapper}>
        <IlEmptyList />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={15} />
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

export default DataKosong;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.7,
  },
  ilustrationWrapper: {
    flex: 1,
    paddingTop: 100,
  },
  textWrapper: {
    paddingHorizontal: Dimensions.get('window').width * 0.1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    lineHeight: 24 * 1.5,
    textAlign: 'center',
    color: colors.text.warning,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    textAlign: 'center',
    color: colors.text.primary,
  },
});
