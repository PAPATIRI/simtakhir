import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {Button, Gap, ModalPicker, TopNavbar} from '../../../components';
import {
  bidang as dataBidang,
  dospem as dataDospem,
  periode as dataPeriode,
} from '../../../Databases/dropdownData';
import {colors, fonts, useForm} from '../../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {getBidangTopikAction} from '../../../redux/action/ajukantopik';

const MhsAjukanTopikNext = ({navigation}) => {
  const [form, setForm] = useForm({
    bidangtopik: '',
    dosenpembimbing: '',
    periode: '',
  });

  const dispatch = useDispatch();
  // const {bidangtopik} = useSelector(state => state.ajukanTopikReducer);
  const ajukanTopikReducer = useSelector(state => state.ajukanTopikReducer);

  // useEffect(() => {
  //   dispatch(getBidangTopikAction());
  // }, []);

  const onSubmit = () => {
    console.log('form', form);
    dispatch({type: 'SET_DETAILTOPIK', value: form});
    navigation.navigate('MhsDetailAjuanTopik');
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Ajukan Topik"
        onPress={() => navigation.navigate('MhsAjukanTopik')}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.labelDropdown}>Bidang Topik</Text>
          <View>
            <Gap height={5} />
            <View style={styles.dropdownWrapper}>
              <ModalPicker
                value={form.bidangtopik}
                onSelectChange={value => setForm('bidangtopik', value)}
                items={dataBidang}
              />
            </View>
          </View>
          <Gap height={20} />
          <Text style={styles.labelDropdown}>Dosen Pembimbing</Text>
          <View>
            <Gap height={5} />
            <View style={styles.dropdownWrapper}>
              <ModalPicker
                value={form.dosenpembimbing}
                onSelectChange={value => setForm('dosenpembimbing', value)}
                items={dataDospem}
              />
            </View>
          </View>
          <Gap height={20} />
          <Text style={styles.labelDropdown}>Periode</Text>
          <View>
            <Gap height={5} />
            <View style={styles.dropdownWrapper}>
              <ModalPicker
                value={form.periode}
                onSelectChange={value => setForm('periode', value)}
                // setValue={setPeriode}
                items={dataPeriode}
              />
            </View>
          </View>
        </View>
        <Button label="Selanjutnya" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default MhsAjukanTopikNext;

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
  labelDropdown: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  dropdownWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: colors.blackSecondary,
    borderWidth: 1,
  },
});
