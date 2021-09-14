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
  pendaftar,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.cardWrapper}>
        <Image source={imgDosen} style={styles.cardImg} />
        <View style={styles.content}>
          <View style={styles.topCard}>
            <Text numberOfLines={2} style={styles.title}>
              {title}..
            </Text>
            <Gap height={5} />
            <Text style={styles.dosen}>{dosen}</Text>
          </View>
          <View style={styles.bottomCard}>
            <Text style={styles.bidang}>{bidang}</Text>
            <Gap height={2} />
            <View style={styles.bottom}>
              <Text style={styles.periode}>{periode}</Text>
              <Text style={styles.periode}>{pendaftar} pendaftar</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardTopikSkripsi;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    height: 170,
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 1,
    padding: 2,
    marginBottom: 10,
  },
  cardImg: {
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 120,
    height: 170,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.accent,
    lineHeight: 16 * 1.5,
  },
  dosen: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    lineHeight: 12 * 1.5,
    color: colors.blackSecondary,
  },
  bidang: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.primary,
  },
  periode: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.primary,
  },
  bottomCard: {
    justifyContent: 'space-between',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
