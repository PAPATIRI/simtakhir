import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IcArrowBack,
  IcRequestMhs,
  IcTambahTopikDosen,
  IcTopikSayaDosen,
  IlRequest,
  IlTambahTopik,
  IlTopikSaya,
} from '../../../assets';
import {TopNavbar, CardMenu} from '../../../components';
import {colors, fonts} from '../../../utils';

const DsnTopikSkripsi = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Topik Skripsi"
        onPress={() => {
          navigation.navigate('DsnDrawer');
        }}
      />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <CardMenu
            title="Tambah"
            title2="Topik Skripsi"
            bgCardColor={colors.white}
            iconCard={<IcTambahTopikDosen />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
            lineheight={30}
            onPress={() => {
              navigation.navigate('DsnTambahTopik');
            }}
          />
          <CardMenu
            title="Request"
            title2="Mahasiswa"
            bgCardColor={colors.white}
            iconCard={<IcRequestMhs />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
            lineheight={30}
            onPress={() => {
              navigation.navigate('DsnRequestMhs');
            }}
          />
        </View>
        <View style={styles.bottomContent}>
          <CardMenu
            title="Topik"
            title2="Skripsi Saya"
            bgCardColor={colors.white}
            iconCard={<IcTopikSayaDosen />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
            lineheight={30}
            onPress={() => {
              navigation.navigate('DsnTopikSkripsiSaya');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DsnTopikSkripsi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
