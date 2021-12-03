import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {Button, Gap, TextInput, TopNavbar} from '../../../components';
import {colors, useForm} from '../../../utils';

const DsnTambahTopik = ({navigation}) => {
  const [form, setForm] = useForm({
    judultopik: '',
    deskripsitopik: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form', form);
    dispatch({type: 'SET_TAMBAHTOPIK', value: form});
    navigation.navigate('DsnTambahTopikNext');
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Tambah Topik"
        onPress={() => {
          navigation.navigate('DsnTopikSkripsi');
        }}
      />
      <View style={styles.content}>
        <View>
          <TextInput
            label="Judul Topik"
            height={96}
            multiline={true}
            textAlignVertical="top"
            placeholder="masukkan judul topik"
            value={form.judultopik}
            onChangeText={value => setForm('judultopik', value)}
          />
          <Gap height={20} />
          <TextInput
            label="Deskripsi Topik"
            height={96}
            placeholder="masukkan Deskripsi topik"
            multiline={true}
            textAlignVertical="top"
            value={form.deskripsitopik}
            onChangeText={value => setForm('deskripsitopik', value)}
          />
          <Gap height={20} />
        </View>
        <Gap height={40} />
        <Button label="Selanjutnya" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default DsnTambahTopik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
