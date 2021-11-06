import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlLogo} from '../../assets';
import {colors, getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        console.log('token: ', res);
        if (res) {
          getData('userProfile').then(res => {
            console.log(res);
            if (res.value.role.type == 'mahasiswa') {
              navigation.reset({
                index: 0,
                routes: [{name: 'MhsDrawer'}],
              });
            } else {
              navigation.reset({
                index: 0,
                routes: [{name: 'DsnDrawer'}],
              });
            }
          });
        } else {
          navigation.replace('Login');
        }
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.page}>
      <IlLogo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});
