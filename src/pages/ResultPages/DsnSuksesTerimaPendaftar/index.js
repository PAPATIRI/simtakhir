import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlBerhasilKirim, IlSuksesTambah, IlTambahTopik} from '../../../assets';
import {Button, Gap} from '../../../components';
import Result from '../../../components/moleculs/Result';
import {colors} from '../../../utils';

const DsnSuksesTerimaPendaftar = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Result
        ilustration={<IlSuksesTambah />}
        title="Yeay! Berhasil"
        desc="kamu telah menerima seorang mahasiswa utnuk mengerjakan topik tugas akhir yang kamu tawarkan"
      />
      <Gap height={30} />
      <Button
        label="OK"
        onPress={() => {
          navigation.navigate('DsnTopikSkripsiSaya');
        }}
      />
    </View>
  );
};

export default DsnSuksesTerimaPendaftar;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
});
