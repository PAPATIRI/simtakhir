import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../..';
import {ProfilImg} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardPendaftarTopik = ({onPress, nameCard, nim, imageCard}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.idWrapper}>
        <Image source={imageCard} style={styles.imgCard}></Image>
        <Gap width={15} />
        <View>
          <Text style={styles.nameCard}>{nameCard}</Text>
          <Text style={styles.nim}>{nim}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnWrapper}
        onPress={onPress}>
        <Text style={styles.textBtn}>terima</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardPendaftarTopik;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    elevation: 1,
  },
  imgCard: {
    height: 64,
    width: 64,
    borderRadius: 100,
  },
  idWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameCard: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.accent,
    lineHeight: 16 * 1.5,
  },
  nim: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  btnWrapper: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 5,
  },
  textBtn: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.white,
    lineHeight: 14 * 1.5,
  },
});
