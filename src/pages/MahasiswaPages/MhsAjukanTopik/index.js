import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {Button, Gap, TextInput, TopNavbar} from '../../../components';
import {colors, useForm} from '../../../utils';

const MhsAjukanTopik = ({navigation}) => {
  const [form, setForm] = useForm({
    judultopik: '',
    dekripsitopik: '',
    mahasiswapengaju: '',
  });
  const dispatch = useDispatch();

  const getMahasiswaPengaju = async () => {
    let idMahasiswa = await getIdMhs();
    let idku = JSON.parse(idMahasiswa);
    return setForm('mahasiswapengaju', idku.value.email);
  };

  const getIdMhs = () => {
    return new Promise(function (resolve, reject) {
      const id = AsyncStorage.getItem('userProfile');
      resolve(id);
    });
  };

  const onSubmit = () => {
    console.log('form', form);
    dispatch({type: 'SET_JUDUL', value: form});
    navigation.navigate('MhsAjukanTopikNext');
  };

  useEffect(() => {
    getMahasiswaPengaju();
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Ajukan Topik"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View>
          <TextInput
            label="Judul Topik"
            placeholder="masukkan judul topik"
            height={96}
            multiline={true}
            textAlignVertical="top"
            value={form.judultopik}
            onChangeText={value => setForm('judultopik', value)}
          />
          <Gap height={20} />
          <TextInput
            label="deskripsi"
            placeholder="masukkan deskripsi topik"
            height={96}
            multiline={true}
            textAlignVertical="top"
            value={form.dekripsitopik}
            onChangeText={value => setForm('dekripsitopik', value)}
          />
        </View>
        <View>
          <Button label="Selanjutnya" onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default MhsAjukanTopik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
});
