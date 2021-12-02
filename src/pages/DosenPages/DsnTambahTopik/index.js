import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  alert,
  Alert,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IcArrowBack, IcArrowDown, ProfilImg} from '../../../assets';
import {
  Button,
  Gap,
  ModalPicker,
  TextInput,
  TopNavbar,
} from '../../../components';
import {colors, fonts, useForm} from '../../../utils';
import {Picker} from '@react-native-picker/picker';
import {
  bidang as dataBidang,
  periode as dataPeriode,
  dosenpengaju as dosen,
} from '../../../Databases/dropdownData';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DsnTambahTopik = ({navigation}) => {
  const [form, setForm] = useForm({
    judultopik: '',
    deskripsitopik: '',
    bidangtopik: '',
    periode: '',
  });
  const [bidang, setBidang] = useState('');
  const [periode, setPeriode] = useState('');
  const [idDosen, setIdDosen] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form', form);
    dispatch({type: 'SET_TAMBAHTOPIK', value: form});
    navigation.navigate('DsnDetailTambahTopik');
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Tambah Topik"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
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
            <Gap height={20} />
            <Text style={styles.labelDropdown}>dosen penawar</Text>
            <View>
              <Gap height={5} />
              <View style={styles.dropDownWrapper}>
                <ModalPicker
                  items={dosen}
                  value={form.dosenpenawar}
                  onSelectChange={value => setForm('dosenpenawar', value)}
                />
              </View>
            </View>
          </View>
          <Gap height={40} />
          <Button label="Selanjutnya" onPress={onSubmit} />
        </ScrollView>
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
