import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardTopikSkripsi from '../../../components/moleculs/CardTopikSkripsi';
import {colors, fonts} from '../../../utils';
import {Gap, TopNavbarSearch} from '../../../components';
import {ArdiansyahImg, EkoImg, SupriyantoImg} from '../../../assets';

const MhsTopikDosen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbarSearch onPress={() => navigation.navigate('MhsTopikSkripsi')} />
      <View style={styles.content}>
        <Text style={styles.title}>Daftar Topik Tugas Akhir</Text>
        <Gap height={10} />
        <CardTopikSkripsi
          title="Refaktor dan Pengembangan Test Suite Otomatis"
          dosen="Ardiansyah S.T.,M.Cs"
          bidang="Machine Learning & Data Mining"
          periode="genap 2020 / 2021"
          pendaftar="1 pendaftar"
          imgDosen={ArdiansyahImg}
        />
        <CardTopikSkripsi
          title="Sistem Pelaporan Perguruan Tinggi Muhammadiyah"
          dosen="Supriyanto, S.T., M.T."
          bidang="Machine Learning & Data Mining"
          periode="genap 2020 / 2021"
          pendaftar="1 pendaftar"
          imgDosen={SupriyantoImg}
        />
        <CardTopikSkripsi
          title="Text Mining dan Klasifikasi Trend Topik Tugas Akhir"
          dosen="Eko Aribowo S.T.,M.Kom"
          bidang="Machine Learning & Data Mining"
          periode="genap 2020 / 2021"
          pendaftar="1 pendaftar"
          imgDosen={EkoImg}
        />
      </View>
    </View>
  );
};

export default MhsTopikDosen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
