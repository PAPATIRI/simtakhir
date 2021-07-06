import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {BgGraduate} from '../../assets';
import {colors, fonts} from '../../utils';
import {TextInput, Gap, Button} from '../../components';

const Login = () => {
  return (
    <View style={styles.page}>
      <ImageBackground
        source={BgGraduate}
        style={styles.imageBg}></ImageBackground>
      <View style={styles.content}>
        <View style={styles.topPage}></View>
        <View style={styles.bottomPage}>
          <View>
            <Text style={styles.title}>Masuk Akun</Text>
            <Gap height={30} />
            <TextInput label="Email" placeholder="masukan email akun anda" />
            <Gap height={25} />
            <TextInput
              label="Kata Sandi"
              placeholder="masukan kata sandi akun anda"
            />
          </View>
          <View>
            <Button label="Masuk" />
            <Gap height={15} />
            <Text style={styles.textFooter}>
              masuk aplikasi SIMTAKHIR menggunakan
              <Text style={styles.link}> akun portal</Text>
            </Text>
            <Text style={styles.textFooter}>Universitas Ahmad Dahlan</Text>
          </View>
        </View>
      </View>
      <View style={styles.overlay}></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  imageBg: {
    width: '100%',
    height: '100%',
  },
  topPage: {
    flex: 1,
  },
  bottomPage: {
    flex: 2,
    backgroundColor: colors.primary,
    borderTopRightRadius: 80,
    paddingHorizontal: 40,
    paddingVertical: 40,
    fontFamily: fonts.primary[600],
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: colors.text.accent,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  textFooter: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    lineHeight: 15,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  link: {
    color: colors.text.primary,
  },
});
