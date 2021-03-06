import React from 'react';
import {StyleSheet, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {Button, FileInput, Gap, TopNavbar} from '../../../components';
import {setLoading} from '../../../redux/action';
import {daftarSemproAction} from '../../../redux/action/daftarsempro';
import {colors, useForm} from '../../../utils';

const MhsDaftarSidangSemproNext = ({navigation}) => {
  const [form, setForm] = useForm({
    naskahbab123: null,
    pathnaskahbab123: null,
    transkipnilai: null,
    pathtranskipnilai: null,
  });
  const dispatch = useDispatch();
  const daftarSemproReducer = useSelector(state => state.daftarSemproReducer);

  const onSubmit = () => {
    dispatch({type: 'SET_DAFTARSEMPRO2', value: form});
    navigation.navigate('MhsDetailDaftarSidangSempro');
  };

  const selectNaskah = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setForm('naskahbab123', res);
    } catch (err) {
      setForm('naskahbab123', null);
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
    } catch (err) {
      setForm('transkipnilai', null);
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
          <Button label="selanjutnya" onPress={onSubmit} />
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
});
