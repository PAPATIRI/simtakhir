import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, Gap, ModalPicker, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';
import {
  bidang as dataBidang,
  dospem as dataDospem,
  periode as dataPeriode,
} from '../../../Databases/dropdownData';

const MhsAjukanTopikNext = ({navigation}) => {
  const [bidang, setBidang] = useState('');
  const [dospem, setDospem] = useState('');
  const [periode, setPeriode] = useState('');

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
                value={bidang}
                setValue={setBidang}
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
                value={dospem}
                setValue={setDospem}
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
                value={periode}
                setValue={setPeriode}
                items={dataPeriode}
              />
            </View>
          </View>
        </View>
        <Button
          label="Selanjutnya"
          onPress={() => navigation.navigate('MhsDetailAjuanTopik')}
        />
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
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
});
