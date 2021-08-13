import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcLogBook} from '../../../assets';
import {TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';
import {IcHamburgerMenu} from '../../../assets';

const CardNotification = ({judul, deskripsi, waktu}) => {
  return (
    <View style={styles.cardNotifWrapper}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{judul.slice(0, 40)}..</Text>
        <Text style={styles.cardDesc}>{deskripsi.slice(0, 40)}..</Text>
        <View style={styles.cardTimeWrapper}>
          <Text style={styles.cardTime}>{waktu}</Text>
        </View>
      </View>
    </View>
  );
};

const Notification = () => {
  return (
    <View style={styles.page}>
      <TopNavbar iconRight={<IcHamburgerMenu />} />
      <View style={styles.content}>
        <Text style={styles.subTitle}>Pemberitahuan</Text>
        <CardNotification
          judul="jadwal sidang mu sudah keluar! ayo persiapkan diri"
          deskripsi="jadwal sidangmu telah keluar, sidangmu akan di"
          waktu="12:09 Mei 2021"
        />
        <CardNotification
          judul="kamu terpilih untuk topik skripsi yang kamu pilih"
          deskripsi="selamat, kamu terpilih sebagai mahasiswa yang akan mengerjakan topik tugas akhir ini"
          waktu="12:09 Mei 2021"
        />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  subTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.primary,
    marginBottom: 20,
  },
  content: {
    flex: 3,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardNotifWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 1,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  iconCardNotif: {
    backgroundColor: colors.accent,
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 11,
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
