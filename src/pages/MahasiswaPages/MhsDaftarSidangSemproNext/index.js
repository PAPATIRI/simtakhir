import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, FileInput, Gap, TopNavbar} from '../../../components';
import {colors, useForm} from '../../../utils';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import {daftarSemproAction} from '../../../redux/action/daftarsempro';
import {setLoading} from '../../../redux/action';

const MhsDaftarSidangSemproNext = ({navigation}) => {
  const [form, setForm] = useForm({
    naskahbab123: null,
    pathnaskahbab123: null,
    transkipnilai: null,
    pathtranskipnilai: null,
  });
  const dispatch = useDispatch();
  const daftarSemproReducer = useSelector(state => state.daftarSemproReducer);

  const data = {
    ...form,
    ...daftarSemproReducer,
  };
  const onSubmit = () => {
    console.log('form data: ', data);
    dispatch({type: 'SET_DAFTARSEMPRO2', value: form});
    dispatch(setLoading(true));
    dispatch(daftarSemproAction(data, navigation));
  };

  const selectNaskah = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setForm('naskahbab123', res);
      // setForm('pathnaskahbab123', res[0].uri);
    } catch (err) {
      setForm('naskahbab123', null);
      // setForm('pathnaskahbab123', null);
      if (DocumentPicker.isCancel(err)) {
        alert('dibatalkan');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const selectTranskipNilai = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setForm('transkipnilai', res);
      // setForm('pathtranskipnilai', res[0].uri);
    } catch (err) {
      setForm('transkipnilai', null);
      // setForm('pathtranskipnilai', null);
      if (DocumentPicker.isCancel(err)) {
        alert('dibatalkan');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Daftar Sempro"
        iconLeft={<IcArrowBack />}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <View>
          <FileInput
            label="Naskah Bab 1-3"
            onPress={selectNaskah}
            namefile={form.naskahbab123}
          />
          <Gap height={20} />
          <FileInput
            label="Transkip Nilai"
            onPress={selectTranskipNilai}
            namefile={form.transkipnilai}
          />
        </View>
        <View>
          <Button label="Daftar" onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default MhsDaftarSidangSemproNext;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
