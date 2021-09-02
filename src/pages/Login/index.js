import React, {useState} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {BgGraduate} from '../../assets';
import {colors, fonts} from '../../utils';
import {TextInput, Gap, Button} from '../../components';

const dataUser = {
  mahasiswa: {
    email: 'mahasiswa@gmail.com',
    password: 12345678,
  },
  dosen: {
    email: 'dosen@gmail.com',
    password: 12345678,
  },
};

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    console.log('email: ', email);
    console.log('password: ', password);
    if (email === dataUser.mahasiswa.email) {
      return navigation.navigate('MainApp');
    } else if (email === dataUser.dosen.email) {
      return navigation.navigate('DosenMainApp');
    } else {
      return alert('email yang kamu masukan tidak sesuai');
    }
  };
  return (
    <View style={styles.page}>
      <ImageBackground
        source={BgGraduate}
        style={styles.imageBg}></ImageBackground>
      <View style={styles.overlay}></View>
      <View style={styles.content}>
        <View style={styles.topPage}></View>
        <View style={styles.bottomPage}>
          <View>
            <Text style={styles.title}>Masuk Akun</Text>
            <Gap height={30} />
            <TextInput
              label="Email"
              placeholder="masukan email akun anda"
              onChangeText={value => setEmail(value)}
              value={email}
            />
            <Gap height={25} />
            <TextInput
              label="Kata Sandi"
              placeholder="masun kata sandi akun anda"
              onChangeText={value => setPassword(value)}
              value={password}
              secureTextEntry
            />
          </View>
          <View>
            <Button label="Masuk" onPress={onLogin} />
            <Gap height={15} />
            <Text style={styles.textFooter}>
              masuk aplikasi SIMTAKHIR menggunakan
              <Text style={styles.link}> akun portal</Text>
            </Text>
            <Text style={styles.textFooter}>Universitas Ahmad Dahlan</Text>
          </View>
        </View>
      </View>
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
