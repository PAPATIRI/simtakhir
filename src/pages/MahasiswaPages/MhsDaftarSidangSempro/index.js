import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, FileInput, Gap, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const MhsDaftarSidangSempro = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Daftar Sempro"
        iconLeft={<IcArrowBack />}
        onPress={() => {
          navigation.navigate('MhsDaftarSidang');
        }}
      />
      <View style={styles.content}>
        <View>
          <FileInput label="Bukti Pembayaran" />
          <Gap height={20} />
          <FileInput label="TOEFL" />
        </View>
        <View>
          <Button
            label="Selanjutnya"
            onPress={() => {
              navigation.navigate('MhsDaftarSidangSemproNext');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MhsDaftarSidangSempro;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
