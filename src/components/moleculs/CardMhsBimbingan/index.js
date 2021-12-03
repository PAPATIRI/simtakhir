import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardMhsBimbingan = ({nama, status, profileImg, periode, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.cardWrapper}>
        <ImageBackground
          source={{uri: profileImg}}
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
    width: Dimensions.get('window').width * 0.38,
    elevation: 2,
    borderRadius: 10,
    marginVertical: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: '60%',
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
    fontFamily: fonts.primary[600],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.white,
    textTransform: 'capitalize',
  },
  status: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.white,
  },
  periode: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.white,
  },
});
