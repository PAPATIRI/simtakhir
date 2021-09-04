import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  IcCalender,
  IcHamburgerMenu,
  IcLogBook,
  IcTopikSkripsi,
  ProfilImg,
} from '../../../assets';
import {CardProfile, Menu, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const MhsHome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topNavWrapper}></View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile
            image={ProfilImg}
            name="Siska Ameli"
            label1="status"
            data1="Metopen"
            label2="jadwal sidang"
            data2="belum ada"
          />
        </View>
        <View style={styles.menuWrapper}>
          <Menu
            menuName="daftar sidang"
            icon={<IcCalender />}
            color={colors.icon.primary.iconPink}
            border={10}
            padding={10}
            onPress={() => navigation.navigate('MhsDaftarSidang')}
          />
          <Menu
            menuName="logbook"
            icon={<IcLogBook />}
            color={colors.icon.primary.iconGreen}
            border={10}
            padding={10}
            onPress={() => navigation.navigate('MhsLogbook')}
          />
          <Menu
            menuName="topik skripsi"
            icon={<IcTopikSkripsi />}
            color={colors.icon.primary.iconChoco}
            border={10}
            padding={10}
            onPress={() => navigation.navigate('MhsTopikSkripsi')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MhsHome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  topNavWrapper: {
    flex: 1,
  },
  content: {
    flex: 3,
    backgroundColor: colors.primary,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  cardWrapper: {
    marginTop: -75,
    flex: 1,
    paddingHorizontal: 20,
  },
  menuWrapper: {
    flex: 2,
    paddingVertical: 40,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
