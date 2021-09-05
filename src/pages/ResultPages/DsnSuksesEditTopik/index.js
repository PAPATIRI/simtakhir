import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlBerhasilKirim, IlSuksesUbah} from '../../../assets';
import {Button, Gap} from '../../../components';
import Result from '../../../components/moleculs/Result';
import {colors} from '../../../utils';

const DsnSuksesEditTopik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Result
        ilustration={<IlSuksesUbah />}
        title="Yeay Berhasil"
        desc="kamu berhasil mengubah data topik penawaran kamu"
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

export default DsnSuksesEditTopik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
});
