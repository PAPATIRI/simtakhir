import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
      <View style={styles.bottom}>
        <Text style={styles.bidang}>{bidang}</Text>
        <View style={styles.statusWrapper(status)}>
          <Text style={styles.status}>{status}</Text>
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
    elevation: 1,
    marginBottom: 10,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textTransform: 'capitalize',
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  dosen: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.secondary,
  },
  bidang: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.secondary,
  },
  statusWrapper: status => ({
    backgroundColor: status == 'open' ? colors.accent : colors.error,
    width: 64,
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 2,
  }),
  status: {
    fontFamily: fonts.primary[400],
    borderRadius: 2,
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.white,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
