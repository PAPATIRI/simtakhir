import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, Gap, TextInput, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const DsnTambahTopik = ({navigation}) => {
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
});
