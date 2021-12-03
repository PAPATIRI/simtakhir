import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, Gap, ModalPicker, TopNavbar} from '../../../components';
import {colors, fonts, useForm} from '../../../utils';
import {
  bidang as dataBidang,
  periode as dataPeriode,
  dosenpengaju as dosen,
} from '../../../Databases/dropdownData';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DsnTambahTopikNext = ({navigation}) => {
  const [bidang, setBidang] = useState('');
  const [periode, setPeriode] = useState('');

  const [form, setForm] = useForm({
    bidangtopik: '',
    periode: '',
    dosenpenawar: '',
  });

  const dispatch = useDispatch();
  const tambahTopikReducer = useSelector(state => state.tambahTopikReducer);

  const getDosenPenawar = () => {
    return new Promise(function (resolve, reject) {
      let dataDosen = AsyncStorage.getItem('userProfile');
      resolve(dataDosen);
    });
  };

  const onSubmit = async () => {
    console.log('form: ', form);
    dispatch({type: 'SET_TAMBAHTOPIK2', value: form});
    navigation.navigate('DsnDetailTambahTopik');
  };

  useEffect(async () => {
    let dataDosen = await getDosenPenawar();
    let idDosen = JSON.parse(dataDosen);
    setForm('dosenpenawar', idDosen.value.username);
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Detail Topik"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.labelDropdown}>Bidang Topik</Text>
          <View>
            <Gap height={5} />
            <View style={styles.dropDownWrapper}>
              <ModalPicker
                items={dataBidang}
                value={form.bidangtopik}
                onSelectChange={value => setForm('bidangtopik', value)}
              />
            </View>
          </View>
          <Gap height={20} />
          <Text style={styles.labelDropdown}>Periode</Text>
          <View>
            <Gap height={5} />
            <View style={styles.dropDownWrapper}>
              <ModalPicker
                items={dataPeriode}
                value={form.periode}
                onSelectChange={value => setForm('periode', value)}
              />
            </View>
          </View>
        </View>
        <Button label="Kirim" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default DsnTambahTopikNext;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  labelDropdown: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
    lineHeight: 16 * 1.5,
  },
  dropDownWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: colors.blackSecondary,
    borderWidth: 1,
  },
  textDropdown: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.blackSecondary,
  },
});
