import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IlLogoNew} from '../../assets';
import {colors, fonts, getData} from '../../utils';

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
      <View style={styles.logo}>
        <IlLogoNew />
      </View>
      <Text style={styles.title}>simtakhir</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingBottom: 40,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 22,
    lineHeight: 22 * 1.5,
    color: colors.secondary,
    textTransform: 'uppercase',
  },
});
