import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSucessDaftarSidang} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Success = ({title, desc}) => {
  return (
    <View style={styles.page}>
      <IlSucessDaftarSidang />
      <View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Gap height={10} />
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Gap height={20} />
          <Button label="OK" />
        </View>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  textWrapper: {
    marginHorizontal: 50,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 24,
    color: colors.text.accent,
    textAlign: 'center',
    lineHeight: 16 * 1.5,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 16 * 1.5,
  },
  buttonWrapper: {
    marginHorizontal: 20,
  },
});
