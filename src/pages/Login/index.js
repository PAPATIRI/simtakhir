import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {BgGraduate} from '../../assets';
import {Button, Gap, TextInput} from '../../components';
import {setLoading, signInAction} from '../../redux/action';
import {colors, fonts, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    identifier: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setLoading(true));
    dispatch(signInAction(navigation, form));
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
              onChangeText={value => setForm('identifier', value)}
              value={form.identifier}
            />
            <Gap height={20} />
            <TextInput
              label="Kata Sandi"
              placeholder="masun kata sandi akun anda"
              onChangeText={value => setForm('password', value)}
              value={form.password}
              secureTextEntry
            />
          </View>
          <Gap height={20} />
          <View style={styles.buttonWrapper}>
            <Button label="Masuk" onPress={onSubmit} />
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  topPage: {
    flex: 1,
  },
  bottomPage: {
    flex: 3,
    backgroundColor: colors.primary,
    borderTopRightRadius: 80,
    paddingHorizontal: 40,
    paddingBottom: 40,
    paddingTop: 30,
    fontFamily: fonts.primary[600],
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    lineHeight: 28 * 1.5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  buttonWrapper: {
    margin: 0,
  },
});
