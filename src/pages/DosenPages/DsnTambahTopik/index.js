import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal, alert, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IcArrowBack, IcArrowDown, ProfilImg} from '../../../assets';
import {
  Button,
  Gap,
  ModalPicker,
  TextInput,
  TopNavbar,
} from '../../../components';
import {colors, fonts} from '../../../utils';
import {Picker} from '@react-native-picker/picker';
import {
  bidang,
  bidang as dataBidang,
  periode as dataPeriode,
} from '../../../Databases/dropdownData';

const DsnTambahTopik = ({navigation}) => {
  const [bidang, setBidang] = useState('');
  const [periode, setPeriode] = useState('');

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Tambah Topik Tugas Akhir"
        onPress={() => {
          navigation.navigate('DsnTopikSkripsi');
        }}
      />
      <View style={styles.content}>
        <View>
          <TextInput label="Judul Topik" placeholder="masukkan judul topik" />
          <Gap height={20} />
          <TextInput
            label="Deskripsi Topik"
            height={96}
            placeholder="masukkan Deskripsi topik"
            multiline={true}
            textAlignVertical="top"
          />
          <Gap height={20} />
          <Text style={styles.labelDropdown}>Bidang Topik</Text>
          <View>
            <Gap height={5} />
            <View style={styles.dropDownWrapper}>
              <ModalPicker
                items={dataBidang}
                value={bidang}
                setValue={setBidang}
              />
            </View>
          </View>
          <Gap height={20} />
          <Text style={styles.labelDropdown}>Bidang Topik</Text>
          <View>
            <Gap height={5} />
            <View style={styles.dropDownWrapper}>
              <ModalPicker
                items={dataPeriode}
                value={periode}
                setValue={setPeriode}
              />
            </View>
          </View>
        </View>
        <Button
          label="Selanjutnya"
          onPress={() => navigation.navigate('DsnDetailTambahTopik')}
        />
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  labelDropdown: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  dropDownWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  textDropdown: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.blackSecondary,
  },
});
