import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  IcCalender,
  IcHamburgerMenu,
  IcLogBook,
  IcTopikSkripsi,
  Mhs1,
  ProfilImg,
} from '../../../assets';
import {CardProfile, Menu, TopNavbar} from '../../../components';
import {API_HOST} from '../../../config/API';
import {colors, getData} from '../../../utils';

const MhsHome = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('');
  const [imgProfile, setImageProfile] = useState(null);
  const getDataUser = async () => {
    try {
      const name = await AsyncStorage.getItem('userProfile');
      console.log('data user: ', name);
      const data = JSON.parse(name);

      if (data != null) {
        // setStatus(data.value.mahasiswas[0].status);
        setUserName(data.value.username);
        setImageProfile(data.value.mahasiswa.avatar.url);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topNavWrapper}></View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile
            image={imgProfile}
            name={userName}
            label1="status"
            data1={status}
            label2="jadwal sidang"
            data2="belum ada"
          />
        </View>
        <View style={styles.menuWrapper}>
          <Menu
            menuName="daftar sidang"
            icon={<IcCalender />}
            color={colors.icon.primary.iconPink}
            onPress={() => navigation.navigate('MhsDaftarSidang')}
          />
          <Menu
            menuName="logbook"
            icon={<IcLogBook />}
            color={colors.icon.primary.iconBlue2}
            onPress={() => navigation.navigate('MhsLogbook')}
          />
          <Menu
            menuName="topik skripsi"
            icon={<IcTopikSkripsi />}
            color={colors.icon.primary.iconChoco}
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
