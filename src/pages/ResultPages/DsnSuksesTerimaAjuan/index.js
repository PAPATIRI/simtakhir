import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlBerhasilKirim} from '../../../assets';
import {Button, Gap} from '../../../components';
import Result from '../../../components/moleculs/Result';
import {colors} from '../../../utils';

const DsnSuksesTerimaAjuan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Result
        ilustration={<IlBerhasilKirim />}
        title="Berhasil Terima Ajuan"
        desc="Kamu telah menerima topik ajuan mahasiswa, sekarang kamu menjadi dosen pembimbingnya"
      />
      <Gap height={30} />
      <Button
        label="OK"
        onPress={() => {
          navigation.navigate('DsnRequestMhs');
        }}
      />
    </View>
  );
};

export default DsnSuksesTerimaAjuan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
});
