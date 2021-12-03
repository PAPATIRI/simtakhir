import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerActions,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {BottomNavigator, Gap, ModalLogout} from '../components';
import {
  DsnBimbingan,
  DsnDetailBimbingan,
  DsnDetailRequestMhs,
  DsnDetailTambahTopik,
  DsnDetailTopikSaya,
  DsnHome,
  DsnNotif,
  DsnPendaftarTopikSaya,
  DsnProfile,
  DsnRequestMhs,
  DsnSuksesEditTopik,
  DsnSuksesTambahTopik,
  DsnSuksesTerimaAjuan,
  DsnSuksesTerimaPendaftar,
  DsnTambahTopik,
  DsnTambahTopikNext,
  Login,
  MhsAjukanTopik,
  MhsAjukanTopikNext,
  MhsDaftarPendadaran,
  MhsDaftarPendadaranNext,
  MhsDaftarSidang,
  MhsDaftarSidangSempro,
  MhsDaftarSidangSemproNext,
  MhsDetailAjuanTopik,
  MhsDetailHasilAjuan,
  MhsDetailLogbook,
  MhsDetailTopikDosen,
  MhsHasilAjuanTopik,
  MhsHome,
  MhsLogbook,
  MhsSuksesAjukanTopik,
  MhsSuksesDaftarPendadaran,
  MhsSuksesDaftarSidang,
  MhsSuksesTambahLogbook,
  MhsTambahLogbook,
  MhsTopikDosen,
  MhsTopikSkripsi,
  Notification,
  Profile,
} from '../pages';
import DsnTopikSkripsi from '../pages/DosenPages/DsnTopikSkripsi';
import DsnTopikSkripsiSaya from '../pages/DosenPages/DsnTopikSkripsiSaya';
import SplashScreen from '../pages/SplashScreen';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {colors, fonts} from '../utils';
import {ArdiansyahImg, IcPlus} from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MhsDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="MhsHome"
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: colors.primary,
        width: '75%',
      }}
      drawerContentOptions={{
        activeBackgroundColor: colors.accent,
        activeTintColor: colors.text.white,
        inactiveTintColor: colors.text.primary,
        labelStyle: {
          fontSize: 16,
          fontFamily: fonts.primary[400],
          lineHeight: 16 * 1.5,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={MhsHome} />
    </Drawer.Navigator>
  );
}

const DsnDrawer = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="DsnHome"
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: colors.primary,
        width: '75%',
      }}
      drawerContentOptions={{
        activeBackgroundColor: colors.accent,
        activeTintColor: colors.text.white,
        inactiveTintColor: colors.text.primary,
        labelStyle: {
          fontSize: 16,
          fontFamily: fonts.primary[400],
          lineHeight: 16 * 1.5,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={DsnHome} />
    </Drawer.Navigator>
  );
};

const CustomDrawer = props => {
  const [userName, setUserName] = useState('');
  const [imageProfile, setImageProfile] = useState(null);
  const [email, setEmail] = useState('');

  const getDataUser = async () => {
    try {
      const name = await AsyncStorage.getItem('userProfile');
      const data = JSON.parse(name);

      if (data.value.role.name == 'dosen') {
        setUserName(data.value.username);
        setImageProfile(data.value.dosen.avatar.url);
        setEmail(data.value.email);
      } else {
        setUserName(data.value.username);
        setImageProfile(data.value.mahasiswa.avatar.formats.small.url);
        setEmail(data.value.email);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      <DrawerContentScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            padding: 10,
            marginBottom: 40,
            marginTop: 10,
            backgroundColor: colors.secondary,
            borderRadius: 8,
          }}>
          <Image
            source={{uri: imageProfile}}
            style={{height: 65, width: 65, borderRadius: 35}}
          />
          <Gap width={10} />
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: fonts.primary[600],
                color: colors.text.white,
                fontSize: 16,
              }}>
              {userName}
            </Text>
            <Gap height={5} />
            <Text
              style={{
                fontFamily: fonts.primary[400],
                color: colors.text.white,
                fontSize: 12,
              }}>
              {email}
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Keluar Akun',
            'Apakah Kamu Yakin Ingin Keluar?',
            [
              {
                text: 'batal',
                style: 'cancel',
              },
              {
                text: 'yakin',
                onPress: () => {
                  AsyncStorage.clear();
                  props.navigation.navigate('Login');
                },
              },
            ],
            {cancelable: false},
          );
        }}
        style={{
          backgroundColor: 'rgba(255, 100, 85, 0.5)',
          opacity: 0.9,
          marginHorizontal: 10,
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontFamily: fonts.primary[400],
            fontSize: 16,
            lineHeight: 16 * 1.5,
            color: colors.text.white,
          }}>
          keluar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="ModalLogout"
        component={ModalLogout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsHome"
        component={MhsHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDrawer"
        component={MhsDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsTopikSkripsi"
        component={MhsTopikSkripsi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsLogbook"
        component={MhsLogbook}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDaftarSidang"
        component={MhsDaftarSidang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsAjukanTopik"
        component={MhsAjukanTopik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsAjukanTopikNext"
        component={MhsAjukanTopikNext}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsHasilAjuanTopik"
        component={MhsHasilAjuanTopik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsTopikDosen"
        component={MhsTopikDosen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDetailLogbook"
        component={MhsDetailLogbook}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsTambahLogbook"
        component={MhsTambahLogbook}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDaftarSidangSempro"
        component={MhsDaftarSidangSempro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDaftarSidangSemproNext"
        component={MhsDaftarSidangSemproNext}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDetailAjuanTopik"
        component={MhsDetailAjuanTopik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDetailTopikDosen"
        component={MhsDetailTopikDosen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDetailHasilAjuan"
        component={MhsDetailHasilAjuan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDaftarPendadaran"
        component={MhsDaftarPendadaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDaftarPendadaranNext"
        component={MhsDaftarPendadaranNext}
        options={{headerShown: false}}
      />

      {/* dosen stack navigation */}
      <Stack.Screen
        name="DsnDrawer"
        component={DsnDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnHome"
        component={DsnHome}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="DsnBimbingan"
        component={DsnBimbingan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnTopikSkripsi"
        component={DsnTopikSkripsi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnTopikSkripsiSaya"
        component={DsnTopikSkripsiSaya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnRequestMhs"
        component={DsnRequestMhs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnDetailRequestMhs"
        component={DsnDetailRequestMhs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnTambahTopik"
        component={DsnTambahTopik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnDetailTambahTopik"
        component={DsnDetailTambahTopik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnTambahTopikNext"
        component={DsnTambahTopikNext}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnDetailTopikSaya"
        component={DsnDetailTopikSaya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnDetailBimbingan"
        component={DsnDetailBimbingan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnPendaftarTopikSaya"
        component={DsnPendaftarTopikSaya}
        options={{headerShown: false}}
      />
      {/* result pages router */}
      <Stack.Screen
        name="DsnSuksesTambahTopik"
        component={DsnSuksesTambahTopik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnSuksesTerimaAjuan"
        component={DsnSuksesTerimaAjuan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnSuksesEditTopik"
        component={DsnSuksesEditTopik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DsnSuksesTerimaPendaftar"
        component={DsnSuksesTerimaPendaftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsSuksesDaftarSidang"
        component={MhsSuksesDaftarSidang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsSuksesTambahLogbook"
        component={MhsSuksesTambahLogbook}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsSuksesAjukanTopik"
        component={MhsSuksesAjukanTopik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsSuksesDaftarPendadaran"
        component={MhsSuksesDaftarPendadaran}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
