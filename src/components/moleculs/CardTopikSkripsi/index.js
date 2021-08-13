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
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.cardWrapper}>
        <Image source={imgDosen} style={styles.cardImg} />
        <View style={styles.content}>
          <View style={styles.topCard}>
            <Text style={styles.title}>{title.slice(0, 35)}..</Text>
            <Gap height={5} />
            <Text style={styles.dosen}>{dosen}</Text>
          </View>
          <View style={styles.bottomCard}>
            <Text style={styles.bidang}>{bidang}</Text>
            <Gap height={2} />
            <View style={styles.bottom}>
              <Text style={styles.periode}>{periode}</Text>
              <Text style={styles.periode}>{pendaftar}</Text>
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
    height: 150,
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
    height: 150,
  },
  content: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.text.accent,
  },
  dosen: {
    fontFamily: fonts.primary[300],
    color: colors.blackSecondary,
  },
  bidang: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
  },
  periode: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
  },
  bottomCard: {
    justifyContent: 'space-between',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
