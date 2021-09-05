import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, FileInput, Gap, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const MhsDaftarSidangSemproNext = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Daftar Sempro"
        iconLeft={<IcArrowBack />}
        onPress={() => {
          navigation.navigate('MhsDaftarSidangSempro');
        }}
      />
      <View style={styles.content}>
        <View>
          <FileInput label="Naskah Bab 1-3" />
          <Gap height={20} />
          <FileInput label="Transkip Nilai" />
        </View>
        <View>
          <Button
            label="Daftar"
            onPress={() => {
              navigation.navigate('MhsSuksesDaftarSidang');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MhsDaftarSidangSemproNext;

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
