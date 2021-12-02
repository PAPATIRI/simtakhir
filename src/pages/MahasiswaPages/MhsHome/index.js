import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  IcCalender,
  IcHamburgerMenu,
  IcLogBook,
  IcTopikSkripsi,
} from '../../../assets';
import {CardProfile, Menu, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const MhsHome = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('');
  const [imgProfile, setImageProfile] = useState(null);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [idUser, setIdUser] = useState('');

  const getDataUser = async () => {
    try {
      const name = await AsyncStorage.getItem('userProfile');
      const data = JSON.parse(name);

      if (data != null) {
        setUserName(data.value.username);
        setEmail(data.value.email);
        setImageProfile(data.value.mahasiswa.avatar.url);
        setRole(data.value.role.name);
        setIdUser(data.value.mahasiswa.nim);
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
      <View style={styles.topNavWrapper}>
        <TopNavbar
          iconRight={<IcHamburgerMenu />}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile
            image={imgProfile}
            email={email}
            name={userName}
            label1="Role"
            data1={role}
            label2="NIM"
            data2={idUser}
          />
        </View>
        <View style={styles.menuWrapper}>
          <Menu
            menuName="daftar sidang"
            icon={<IcCalender />}
            color={colors.secondary}
            onPress={() => navigation.navigate('MhsDaftarSidang')}
          />
          <Menu
            menuName="logbook"
            icon={<IcLogBook />}
            color={colors.secondary}
            onPress={() => navigation.navigate('MhsLogbook')}
          />
          <Menu
            menuName="topik skripsi"
            icon={<IcTopikSkripsi />}
            color={colors.secondary}
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
