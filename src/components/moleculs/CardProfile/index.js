import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from '../../../utils';
import {BgCard, ProfilImg} from '../../../assets';
import {Gap} from '../../atoms';

const CardProfile = ({image, name, label1, label2, data1, data2}) => {
  return (
    <View style={styles.body}>
      <ImageBackground
        source={BgCard}
        style={styles.bgCard}
        imageStyle={{borderRadius: 10}}
        resizeMode="cover">
        <View style={styles.cardImg}>
          <Image source={image} style={styles.profileImg} />
        </View>
        <View style={styles.cardContentWrapper}>
          <View style={styles.cardContent}>
            <Text style={styles.nameCard}>{name}</Text>
            <Gap height={15} />
            <View style={styles.dataCard}>
              <View>
                <Text style={styles.subTitle}>{label1}</Text>
                <Text style={styles.status}>{data1}</Text>
              </View>
              <Gap height={10} />
              <View>
                <Text style={styles.subTitle}>{label2}</Text>
                <Text style={styles.status}>{data2}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.secondary,
    height: 150,
    borderRadius: 10,
    elevation: 3,
  },
  bgCard: {
    height: 150,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
  },
  profileImg: {
    flex: 1,
    width: 120,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cardImg: {
    borderRadius: 10,
  },
  nameCard: {
    color: colors.primary,
    fontFamily: fonts.primary[600],
    fontSize: 18,
  },
  subTitle: {
    color: colors.primary,
    fontFamily: fonts.primary[400],
    fontSize: 12,
  },
  status: {
    color: colors.primary,
    fontFamily: fonts.primary[400],
    fontSize: 16,
  },
});
