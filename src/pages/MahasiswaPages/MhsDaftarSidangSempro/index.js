import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {Button, FileInput, Gap, TopNavbar} from '../../../components';
import {colors, useForm} from '../../../utils';

const MhsDaftarSidangSempro = ({navigation}) => {
  const [form, setForm] = useForm({
    mahasiswapengaju: '',
    buktipembayaran: null,
    pathbuktipembayaran: null,
    toefl: null,
    pathtoefl: null,
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_DAFTARSEMPRO1', value: form});
    navigation.navigate('MhsDaftarSidangSemproNext');
  };

  //set state mahasiswapengaju
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

  const selectBuktiPembayaran = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setForm('buktipembayaran', res);
    } catch (err) {
      setForm('buktipembayaran', null);
      if (DocumentPicker.isCancel(err)) {
        alert('dibatalkan');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const selectToefl = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setForm('toefl', res);
    } catch (err) {
      setForm('toefl', null);
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
        titleBar="Daftar Sempro"
        iconLeft={<IcArrowBack />}
        onPress={() => {
          navigation.navigate('MhsDaftarSidang');
        }}
      />
      <View style={styles.content}>
        <View>
          <FileInput
            label="Bukti Pembayaran"
            onPress={selectBuktiPembayaran}
            namefile={form.buktipembayaran}
          />
          <Gap height={20} />
          <FileInput
            label="TOEFL"
            onPress={selectToefl}
            namefile={form.toefl}
          />
        </View>
        <View>
          <Button label="Selanjutnya" onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default MhsDaftarSidangSempro;

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
