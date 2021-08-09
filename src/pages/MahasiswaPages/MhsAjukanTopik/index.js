import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, Gap, TextInput, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const MhsAjukanTopik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Ajukan Topik"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.navigate('MhsTopikSkripsi')}
      />
      <View style={styles.content}>
        <View>
          <TextInput label="Judul Topik" placeholder="masukkan judul topik" />
          <Gap height={20} />
          <TextInput
            label="deskripsi"
            placeholder="masukkan deskripsi topik"
            height={80}
            multiline={true}
            textAlignVertical="top"
          />
        </View>
        <View>
          <Button
            label="Selanjutnya"
            onPress={() => navigation.navigate('MhsAjukanTopikNext')}
          />
        </View>
      </View>
    </View>
  );
};

export default MhsAjukanTopik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
});
