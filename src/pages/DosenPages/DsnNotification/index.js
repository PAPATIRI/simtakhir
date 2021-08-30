import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcHamburgerMenu, IcLogBook} from '../../../assets';
import {TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const CardNotification = ({judul, deskripsi, waktu}) => {
  return (
    <View style={styles.cardNotifWrapper}>
      <View style={styles.cardContent}>
        <Text numberOfLines={1} style={styles.cardTitle}>
          {judul}..
        </Text>
        <Text numberOfLines={1} style={styles.cardDesc}>
          {deskripsi}..
        </Text>
        <View style={styles.cardTimeWrapper}>
          <Text style={styles.cardTime}>{waktu}</Text>
        </View>
      </View>
    </View>
  );
};

const DsnNotification = () => {
  return (
    <View style={styles.page}>
      <TopNavbar iconRight={<IcHamburgerMenu />} />
      <View style={styles.content}>
        <Text style={styles.subTitle}>Pemberitahuan</Text>
        <CardNotification
          judul="pendaftar baru untuk topik skripsi kamu!"
          deskripsi="topik skripsi 'pengembangan perangkat lunak menggunakan metode'"
          waktu="12:09 Mei 2021"
        />
        <CardNotification
          judul="ajuan topik baru dari M andika risky"
          deskripsi="selamat, kamu terpilih sebagai mahasiswa yang akan mengerjakan topik tugas akhir ini"
          waktu="12:09 Mei 2021"
        />
      </View>
    </View>
  );
};

export default DsnNotification;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  subTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.primary,
    marginBottom: 15,
  },
  content: {
    flex: 3,
    padding: 20,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardNotifWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    elevation: 1,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.accent,
  },
  cardDesc: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 5,
    marginBottom: 15,
  },
  cardTimeWrapper: {
    flexDirection: 'row',
  },
  cardTime: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.text.secondary,
    width: '100%',
    textAlign: 'right',
  },
});
