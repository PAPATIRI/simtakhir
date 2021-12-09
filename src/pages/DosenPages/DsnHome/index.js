import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IcBimbingan, IcHamburgerMenu, IcSkripsi} from '../../../assets';
import {CardProfile, Gap, TopNavbar} from '../../../components';
import CardMenuDosen from '../../../components/moleculs/CardMenuDosen';
import {colors, fonts} from '../../../utils';

const DsnHome = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [imgProfile, setImageProfile] = useState(null);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [idUser, setIdUser] = useState('');

  const getDataUser = async () => {
    try {
      const datauser = await AsyncStorage.getItem('userProfile');
      const data = JSON.parse(datauser);

      if (data != null) {
        setUserName(data.value.username);
        setImageProfile(data.value.dosen.avatar.url);
        setEmail(data.value.email);
        setRole(data.value.role.name);
        setIdUser(data.value.dosen.nidy);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.topNavWrapper}>
        <TopNavbar
          iconRight={<IcHamburgerMenu />}
          onPress={() => navigation.toggleDrawer()}
        />
        <View style={styles.emptyView}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile
            image={imgProfile}
            name={userName}
            email={email}
            label1="Role"
            data1={role}
            label2="NIDN"
            data2={idUser}
          />
        </View>
        <View style={styles.menuWrapper}>
          <CardMenuDosen
            title="Bimbingan"
            title2="Ku"
            bgCardColor={colors.secondary}
            iconCard={<IcBimbingan />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
            color={colors.text.primary}
            lineheight={30}
            onPress={() => {
              navigation.navigate('DsnBimbingan');
            }}
          />
          <CardMenuDosen
            title="Topik"
            title2="Skripsi"
            bgCardColor={colors.secondary}
            iconCard={<IcSkripsi />}
            fontsfamily={fonts.primary[600]}
            fontsize={20}
            lineheight={30}
            color={colors.text.primary}
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
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  cardWrapper: {
    marginTop: -75,
    flex: 1,
    paddingHorizontal: 20,
  },
  menuWrapper: {
    flex: 2,
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
