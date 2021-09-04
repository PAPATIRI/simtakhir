import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IcArrowBack,
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
          navigation.navigate('DosenMainApp');
        }}
      />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <CardMenu
            title="Tambah     Topik Skripsi"
            bgCardColor={colors.pink}
            iconCard={<IlTambahTopik />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
            onPress={() => {
              navigation.navigate('DsnTambahTopik');
            }}
          />
          <CardMenu
            title="Request Mahasiswa"
            bgCardColor={colors.choco}
            iconCard={<IlRequest />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
            onPress={() => {
              navigation.navigate('DsnRequestMhs');
            }}
          />
        </View>
        <View style={styles.bottomContent}>
          <CardMenu
            title="Topik     Skripsi Saya"
            bgCardColor={colors.green}
            iconCard={<IlTopikSaya />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
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
