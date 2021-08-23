import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {
  Button,
  FileInput,
  Gap,
  TextInput,
  TopNavbar,
} from '../../../components';
import {colors} from '../../../utils';

const MhsTambahLogbook = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Tambah Logbook"
        onPress={() => navigation.navigate('MhsLogbook')}
      />
      <View style={styles.content}>
        <View>
          <TextInput label="Kegiatan" placeholder="masukkan kegiatan" />
          <Gap height={20} />
          <TextInput
            label="Catatan Kemajuan"
            placeholder="masukkan catatan kemajuan"
            height={96}
            multiline={true}
            textAlignVertical="top"
          />
          <Gap height={20} />
          <FileInput label="File Tambahan" />
        </View>
        <View>
          <Button label="Tambah Logbook" />
        </View>
      </View>
    </View>
  );
};

export default MhsTambahLogbook;

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
