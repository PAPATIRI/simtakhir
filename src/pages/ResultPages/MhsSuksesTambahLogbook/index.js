import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IlBerhasilKirim} from '../../../assets';
import {Button, Gap, Result} from '../../../components';
import {colors} from '../../../utils';

const MhsSuksesTambahLogbook = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Result
        ilustration={<IlBerhasilKirim />}
        title="Yeay! Berhasil"
        desc="kamu berhasil menambahkan logbook, tunggu konfirmasi dari dosen pembimbingmu ya"
      />
      <Gap height={10} />
      <Button
        label="OK"
        onPress={() => {
          navigation.reset({index: 0, routes: [{name: 'MhsLogbook'}]});
        }}
      />
      <Gap height={10} />
      <Button
        type="secondaryAccent"
        label="Tambah Logbook Lainnya"
        onPress={() =>
          navigation.reset({index: 0, routes: [{name: 'MhsTambahLogbook'}]})
        }
      />
    </View>
  );
};

export default MhsSuksesTambahLogbook;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
});
