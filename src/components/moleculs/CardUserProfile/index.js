import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArdiansyahImg, IcSignOut} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardUserProfile = ({onPress, nama, nim, image}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.contentWrapper}>
        <Image source={{uri: image}} style={styles.imgCard} />
        <View style={styles.contentCard}>
          <Text style={styles.name}>{nama}</Text>
          <Text style={styles.nim}>{nim}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.btnCard}>
          {<IcSignOut />}
          <Text style={styles.btnText}>Keluar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardUserProfile;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 20,
  },
  imgCard: {
    height: 60,
    width: 60,
    borderRadius: 200,
    marginRight: 10,
  },
  contentCard: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  name: {
    color: colors.text.white,
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  nim: {
    color: colors.text.white,
    fontFamily: fonts.primary[400],
    fontSize: 16,
  },
  btnCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btnText: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.danger,
  },
});
