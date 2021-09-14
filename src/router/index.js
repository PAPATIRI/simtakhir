import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {
  DosenHome,
  DosenNotif,
  DosenProfil,
  DsnBimbingan,
  DsnDetailRequestMhs,
  DsnRequestMhs,
  DsnTambahTopik,
  DsnDetailTambahTopik,
  DsnDetailTopikSaya,
  DsnDetailBimbingan,
  DsnSuksesTambahTopik,
  DsnSuksesTerimaAjuan,
  DsnSuksesEditTopik,
  DsnPendaftarTopikSaya,
  DsnSuksesTerimaPendaftar,
  MhsHome,
  Login,
  MhsTopikSkripsi,
  Notification,
  Profile,
  MhsLogbook,
  MhsDaftarSidang,
  MhsAjukanTopik,
  MhsAjukanTopikNext,
  MhsHasilAjuanTopik,
  MhsTopikDosen,
  MhsDetailLogbook,
  MhsTambahLogbook,
  MhsSuksesDaftarSidang,
  MhsSuksesTambahLogbook,
  MhsDetailAjuanTopik,
  MhsDaftarSidangSempro,
  MhsDaftarSidangSemproNext,
  MhsSuksesAjukanTopik,
  MhsDetailTopikDosen,
} from '../pages';
import DsnTopikSkripsi from '../pages/DosenPages/DsnTopikSkripsi';
import DsnTopikSkripsiSaya from '../pages/DosenPages/DsnTopikSkripsiSaya';
import SplashScreen from '../pages/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="MhsHome"
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="MhsHome" component={MhsHome} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const DosenMainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="DosenHome"
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="DosenNotif" component={DosenNotif} />
      <Tab.Screen name="DosenHome" component={DosenHome} />
      <Tab.Screen name="DosenProfil" component={DosenProfil} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
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
        name="MainApp"
        component={MainApp}
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

      {/* dosen stack navigation */}
      <Stack.Screen
        name="DosenMainApp"
        component={DosenMainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DosenHome"
        component={DosenHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DosenNotif"
        component={DosenNotif}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DosenProfil"
        component={DosenProfil}
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
    </Stack.Navigator>
  );
};

export default Router;
