import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuksesTambah} from '../../../assets';
import {Button, ButtonDangerSedond, Gap} from '../../../components';
import Result from '../../../components/moleculs/Result';
import {colors} from '../../../utils';

const DsnSuksesTambahTopik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Result
        title="Yeay! Berhasil"
        desc="kamu berhasil menambahkan topik tugas akhir untuk diambil mahasiswa"
        ilustration={<IlSuksesTambah />}
      />
      <Button
        label="OK"
        onPress={() => {
          navigation.navigate('DsnTopikSkripsi');
        }}
      />
      <Gap height={10} />
      <Button
        type="secondaryAccent"
        label="Tambah Topik Lainnya"
        onPress={() => {
          navigation.navigate('DsnTambahTopik');
        }}
      />
    </View>
  );
};

export default DsnSuksesTambahTopik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
});
