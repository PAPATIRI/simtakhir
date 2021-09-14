import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {
  Button,
  FileInput,
  Gap,
  TextInput,
  TopNavbar,
} from '../../../components';
import {addLogbookAction} from '../../../redux/action';
import {colors, useForm} from '../../../utils';

const MhsTambahLogbook = ({navigation}) => {
  const [form, setForm] = useForm({
    kegiatan: '',
    catatankemajuan: '',
    filetambahan: '',
  });

  const dispatch = useDispatch();
  const logbookReducer = useSelector(state => state.logbookReducer);

  const onsubmit = () => {
    console.log('form data: ', form);
    dispatch(addLogbookAction(navigation, form));
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Tambah Logbook"
        onPress={() => navigation.navigate('MhsLogbook')}
      />
      <View style={styles.content}>
        <View>
          <TextInput
            label="Kegiatan"
            placeholder="masukkan kegiatan"
            value={form.kegiatn}
            onChangeText={value => setForm('kegiatan', value)}
          />
          <Gap height={20} />
          <TextInput
            label="Catatan Kemajuan"
            placeholder="masukkan catatan kemajuan"
            height={96}
            value={form.catatankemajuan}
            onChangeText={value => setForm('catatankemajuan', value)}
            multiline={true}
            textAlignVertical="top"
          />
          <Gap height={20} />
          <FileInput label="File Tambahan (optional)" />
        </View>
        <View>
          <Button label="Tambah Logbook" onPress={onsubmit} />
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
