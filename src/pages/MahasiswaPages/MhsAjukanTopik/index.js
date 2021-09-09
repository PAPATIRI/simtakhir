import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {
  Button,
  Gap,
  ModalPicker,
  TextInput,
  TopNavbar,
} from '../../../components';
import {colors, useForm} from '../../../utils';
import {useSelector, useDispatch} from 'react-redux';

const MhsAjukanTopik = ({navigation}) => {
  const [form, setForm] = useForm({
    judultopik: '',
    deskripsitopik: '',
  });
  //dispatch function
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form', form);
    dispatch({type: 'SET_JUDUL', value: form});
    navigation.navigate('MhsAjukanTopikNext');
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Ajukan Topik"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.navigate('MhsTopikSkripsi')}
      />
      <View style={styles.content}>
        <View>
          <TextInput
            label="Judul Topik"
            placeholder="masukkan judul topik"
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
            value={form.deskripsi}
            onChangeText={value => setForm('deskripsitopik', value)}
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
