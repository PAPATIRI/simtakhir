import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardTopikSkripsiDsn = ({
  color,
  title,
  bidang,
  tanggal,
  pendaftar,
  status,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.cardWrapper}>
        <View style={styles.topContent}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.bidang}>{bidang}</Text>
        </View>
        <Gap height={20} />
        <View style={styles.bottomContent}>
          <Text style={styles.tanggal}>{tanggal}</Text>
          <View style={styles.botRightContent}>
            <Text style={styles.pendaftar}>{pendaftar} pendaftar</Text>
            <Gap width={20} />
            <Text style={styles.status(color)}>{status}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardTopikSkripsiDsn;

const styles = StyleSheet.create({
  cardWrapper: {
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    elevation: 1,
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.accent,
    lineHeight: 18 * 1.5,
  },
  bidang: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botRightContent: {
    flexDirection: 'row',
  },
  tanggal: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.primary,
  },
  pendaftar: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.primary,
  },
  status: color => ({
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: color,
  }),
});
