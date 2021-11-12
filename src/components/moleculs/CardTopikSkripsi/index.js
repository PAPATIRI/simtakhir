import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ArdiansyahImg} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardTopikSkripsi = ({
  imgDosen,
  title,
  periode,
  dosen,
  bidang,
  status,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.cardWrapper}
      onPress={onPress}>
      <Text numberOfLines={2} style={styles.title}>
        {title}..
      </Text>
      <Gap height={2} />
      <Text style={styles.dosen}>{dosen}</Text>
      <Gap height={20} />
      <View style={styles.bottomCard}>
        <Text style={styles.bidang}>{bidang}</Text>
        <Gap height={2} />
        <View style={styles.bottom}>
          <Text style={styles.periode}>{periode}</Text>
          <Text style={styles.status(status)}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardTopikSkripsi;

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textTransform: 'capitalize',
    color: colors.text.blue,
    lineHeight: 16 * 1.5,
  },
  dosen: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.primary,
  },
  bidang: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.secondary,
  },
  periode: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.secondary,
  },
  status: status => ({
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: status == 'open' ? colors.text.accent : colors.text.danger,
  }),
  bottomCard: {
    justifyContent: 'space-between',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
