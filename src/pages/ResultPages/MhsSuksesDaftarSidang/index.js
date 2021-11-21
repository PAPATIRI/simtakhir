import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IlBerhasilKirim} from '../../../assets';
import {Button, Gap, Result} from '../../../components';
import {colors} from '../../../utils';

const MhsSuksesDaftarSidang = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Result
        ilustration={<IlBerhasilKirim />}
        title="Yeay! Berhasil"
        desc="kamu berhasil mengajukan pendaftaran seminar proposal (SemPro), tunggu jadwalmu ya"
      />
      <Gap height={10} />
      <Button
        label="OK"
        onPress={() => {
          navigation.navigate('MhsDaftarSidang');
        }}
      />
    </View>
  );
};

export default MhsSuksesDaftarSidang;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
});
