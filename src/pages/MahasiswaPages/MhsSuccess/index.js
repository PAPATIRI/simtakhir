import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSucessDaftarSidang} from '../../../assets';
import Success from '../../../components/moleculs/Success';

const MhsSuccess = ({title, desc}) => {
  return (
    <View style={styles.page}>
      <Success
        title="Yeay! Berhasil"
        desc="kamu sudah berhasil mendaftar seminar proposal, tunggu konfirmasi jadwal kamu ya"
      />
    </View>
  );
};

export default MhsSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
