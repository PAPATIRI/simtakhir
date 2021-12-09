import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {Button, FileInput, Gap, TopNavbar} from '../../../components';
import {colors, useForm} from '../../../utils';

const MhsDaftarPendadaran = ({navigation}) => {
  const [form, setForm] = useForm({
    mahasiswapengaju: '',
    buktipembayaran: null,
    pathbuktipembayaran: null,
    toefl: null,
    pathtoefl: null,
    buktibebasspp: null,
    pathbuktibebasspp: null,
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_DAFTARPENDADARAN1', value: form});
    console.log('data form pendadaran1: ', form);
    navigation.navigate('MhsDaftarPendadaranNext');
  };

  //set state mahasiswapengaju
  const getMahasiswaPengaju = async () => {
    let idMahasiswa = await getIdMhs();
    let idku = JSON.parse(idMahasiswa);
    console.log('email pengaju: ', idku.value.email);
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
      console.log('path bukti bayar: ', res[0].uri);
      console.log('file bukti: ', res);
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

  const selectBebasSpp = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setForm('buktibebasspp', res);
    } catch (err) {
      setForm('buktibebasspp', null);
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
        titleBar="Daftar pendadaran"
        iconLeft={<IcArrowBack />}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollStyle}
          showsVerticalScrollIndicator={false}>
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
            <Gap height={20} />
            <FileInput
              label="Bukti Bebas SPP"
              onPress={selectBebasSpp}
              namefile={form.buktibebasspp}
            />
          </View>
        </ScrollView>
        <Gap height={20} />
        <Button label="Selanjutnya" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default MhsDaftarPendadaran;

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
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  scrollStyle: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
});
