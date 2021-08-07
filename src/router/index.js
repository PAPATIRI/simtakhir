import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  MhsHome,
  Login,
  MhsTopikSkripsi,
  Notification,
  Profile,
} from '../pages/MahasiswaPages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

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

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
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
    </Stack.Navigator>
  );
};

export default Router;
