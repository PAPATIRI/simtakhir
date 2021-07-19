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

const CardProfile = () => {
  return (
    <View style={styles.body}>
      <ImageBackground
        source={BgCard}
        style={styles.bgCard}
        imageStyle={{borderRadius: 10}}
        resizeMode="cover">
        <View style={styles.cardImg}>
          <Image source={ProfilImg} style={styles.profileImg} />
        </View>
        <View style={styles.cardContentWrapper}>
          <View style={styles.cardContent}>
            <Text style={styles.nameCard}>Siska Amelia</Text>
            <Gap height={15} />
            <View style={styles.dataCard}>
              <View>
                <Text style={styles.subTitle}>status</Text>
                <Text style={styles.status}>MetoPen</Text>
              </View>
              <View>
                <Text style={styles.subTitle}>jadwal sidang</Text>
                <Text style={styles.status}>belum ada</Text>
              </View>
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View></View>
            <View>
              <TouchableOpacity activeOpacity={0.7} style={styles.btnCard}>
                <Text style={styles.btnCardText}>selengkapnya</Text>
              </TouchableOpacity>
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
    width: 100,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardContent: {
    padding: 15,
  },
  cardImg: {
    borderRadius: 10,
  },
  nameCard: {
    color: colors.primary,
    fontFamily: fonts.primary[600],
    fontSize: 16,
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
  dataCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnCard: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
  },
  btnCardText: {
    color: colors.accent,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    textAlign: 'center',
  },
});
