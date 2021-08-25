import React from 'react';
import {
  ColorPropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ArdiansyahImg,
  IcBimbingan,
  IcCalender,
  IcHamburgerMenu,
  IcLogBook,
  IcSkripsi,
  IcTopikSkripsi,
} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {CardMenu, CardProfile, Gap, Menu, TopNavbar} from '../../../components';

const DsnHome = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.topNavWrapper}>
        <TopNavbar iconRight={<IcHamburgerMenu />} />
        <View style={styles.emptyView}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile
            image={ArdiansyahImg}
            name="Ardiansyah S.T.,M.Cs"
            label1="total topik"
            data1="10 topik"
            label2="total mahasiswa bimbingan"
            data2="10 Mahasiswa"
          />
        </View>
        <View style={styles.menuWrapper}>
          <CardMenu
            title="Bimbingan    ku"
            bgCardColor={colors.pink}
            iconCard={<IcBimbingan />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
            onPress={() => {
              navigation.navigate('DsnBimbingan');
            }}
          />
          <CardMenu
            title="Topik    Skripsi"
            bgCardColor={colors.choco}
            iconCard={<IcSkripsi />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
            onPress={() => {
              navigation.navigate('DsnTopikSkripsi');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DsnHome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  topNavWrapper: {
    flex: 1,
  },
  emptyView: {
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
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
