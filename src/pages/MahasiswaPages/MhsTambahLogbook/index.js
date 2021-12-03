import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {
  Button,
  FileInput,
  Gap,
  TextInput,
  TopNavbar,
} from '../../../components';
import {setLoading, tambahLogbookAction} from '../../../redux/action';
import {colors, useForm} from '../../../utils';

const MhsTambahLogbook = ({navigation}) => {
  const [form, setForm] = useForm({
    bimbingan: '',
    catatankemajuan: '',
    emailmahasiswa: '',
    filetambahan: null,
  });
  const dispatch = useDispatch();

  //set state mahasiswapengaju
  const getMahasiswaPengaju = async () => {
    let idMahasiswa = await getIdMhs();
    let idku = JSON.parse(idMahasiswa);
    return setForm('emailmahasiswa', idku.value.email);
  };

  const getIdMhs = () => {
    return new Promise(function (resolve, reject) {
      const id = AsyncStorage.getItem('userProfile');
      resolve(id);
    });
  };

  const onsubmit = () => {
    dispatch(setLoading(true));
    dispatch({type: 'SET_TAMBAHLOGBOOK', value: form});
    dispatch(tambahLogbookAction(form, navigation));
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setForm('file', res);
    } catch (err) {
      setForm('file', null);
      if (DocumentPicker.isCancel(err)) {
        alert('dibatalkan');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  useEffect(() => {
    getMahasiswaPengaju();
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Tambah Logbook"
        onPress={() => navigation.navigate('MhsLogbook')}
      />
      <View style={styles.content}>
        <View>
          <TextInput
            label="Kegiatan"
            placeholder="masukkan kegiatan"
            value={form.bimbingan}
            onChangeText={value => setForm('bimbingan', value)}
          />
          <Gap height={20} />
          <TextInput
            label="Catatan Kemajuan"
            placeholder="masukkan catatan kemajuan"
            height={96}
            value={form.catatankemajuan}
            onChangeText={value => setForm('catatankemajuan', value)}
            multiline={true}
            textAlignVertical="top"
          />
          <Gap height={20} />
          <FileInput
            label="File Tambahan (foto)"
            namefile={form.file}
            onPress={selectFile}
          />
        </View>
        <View>
          <Button label="Kirim" onPress={onsubmit} />
        </View>
      </View>
    </View>
  );
};

export default MhsTambahLogbook;

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
