import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {IcHamburgerMenu, IlLogoNew} from '../../assets';
import {Gap, TopNavbar} from '../../components';
import {colors, fonts} from '../../utils';

const Tentang = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Tentang Aplikasi"
        iconRight={<IcHamburgerMenu />}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>SIMTAKHIR MOBILE APP</Text>
        <Text style={styles.data}>1.0.0</Text>
        <Gap height={15} />
        <IlLogoNew />
        <Gap height={15} />
        <Text style={styles.data}>2020-2021</Text>
        <Text style={styles.data}>tugas akhir Syarif Tofik Hidayat</Text>
      </View>
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 0.2,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    lineHeight: 20 * 1.5,
    color: colors.text.primary,
    textTransform: 'uppercase',
  },
  data: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
});
