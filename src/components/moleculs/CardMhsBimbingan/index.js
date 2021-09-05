import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap} from '../..';
import {ProfilImg} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardMhsBimbingan = ({nama, status, periode, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.cardWrapper}>
        {/* <Image source={ProfilImg} style={styles.image} /> */}
        <ImageBackground
          source={ProfilImg}
          resizeMode="cover"
          imageStyle={{borderRadius: 10}}
          style={styles.imgcard}>
          <View style={styles.cardContent}>
            <Text style={styles.nama}>{nama}</Text>
            <View>
              <Text style={styles.status}>{status}</Text>
              <Text style={styles.periode}>{periode}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default CardMhsBimbingan;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: colors.primary,
    height: 220,
    width: 150,
    elevation: 2,
    borderRadius: 10,
    marginVertical: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: colors.primary,
    marginTop: '85%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 40,
  },
  imgcard: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  nama: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.accent,
  },
  status: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
  },
  periode: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.text.primary,
  },
});
