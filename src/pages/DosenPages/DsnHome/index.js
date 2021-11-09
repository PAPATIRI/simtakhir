import React, {useState, useEffect} from 'react';
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
import {colors, fonts, getData} from '../../../utils';
import {CardMenu, CardProfile, Gap, Menu, TopNavbar} from '../../../components';
import CardMenuDosen from '../../../components/moleculs/CardMenuDosen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DsnHome = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [imgProfile, setImageProfile] = useState(null);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [idUser, setIdUser] = useState('');

  const getDataUser = async () => {
    try {
      const name = await AsyncStorage.getItem('userProfile');
      const data = JSON.parse(name);

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
            title="Bimbingan    ku"
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
          <Gap width={40} />
          <CardMenuDosen
            title="Topik    Skripsi"
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
    justifyContent: 'center',
  },
});
