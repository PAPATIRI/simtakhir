import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IlBerhasilKirim} from '../../../assets';
import {Button, Gap, Result} from '../../../components';
import {colors} from '../../../utils';

const MhsSuksesAjukanTopik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Result
        ilustration={<IlBerhasilKirim />}
        title="Yeay! Berhasil"
        desc="kamu berhasil mengajukan topik tugas akhirmu ke dosen pilihanmu, tunggu hingga notifikasi hasilnya keluar"
      />
      {/* <View style={styles.ilustrationWrapper}>
        <LottieView source={SuksesLottie} />
      </View> */}
      <Gap height={10} />
      <Button
        label="OK"
        onPress={() => {
          navigation.navigate('MhsTopikSkripsi');
        }}
      />
    </View>
  );
};

export default MhsSuksesAjukanTopik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  // ilustrationWrapper: {
  //   flex: 1,
  //   height: 250,
  //   width: 250,
  // },
});
