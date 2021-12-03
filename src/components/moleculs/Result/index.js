import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../..';
import {IlSuksesTambah} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Result = ({title, desc, ilustration}) => {
  return (
    <View style={styles.resultWrapper}>
      <Gap height={60} />
      <View style={styles.ilusWrapper}>{ilustration}</View>
      <View style={styles.detail}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Gap height={10} />
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <Gap height={30} />
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  resultWrapper: {
    flexGrow: 1,
    backgroundColor: colors.primary,
  },
  ilusWrapper: {
    alignItems: 'center',
  },
  detail: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textWrapper: {
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.blue,
    lineHeight: 24 * 1.5,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
