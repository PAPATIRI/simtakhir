import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {Button, ButtonDangerSedond, Gap, TopNavbar} from '../../../components';
import {setLoading, tambahTopikAction} from '../../../redux/action';
import {colors, fonts, showMessage} from '../../../utils';

const DsnDetailTambahTopik = ({navigation}) => {
  const tambahTopikReducer = useSelector(state => state.tambahTopikReducer);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (
      tambahTopikReducer.bidangtopik != '' &&
      tambahTopikReducer.deskripsitopik != '' &&
      tambahTopikReducer.dosenpenawar != '' &&
      tambahTopikReducer.judultopik != '' &&
      tambahTopikReducer.periode != '' &&
      tambahTopikReducer.status != ''
    ) {
      dispatch(setLoading(true));
      dispatch(tambahTopikAction(navigation, tambahTopikReducer));
    } else {
      showMessage('isi data dengan lengkap', 'danger');
    }
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Konfirmasi Data Topik"
        onPress={() => {
          navigation.navigate('DsnTambahTopik');
        }}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.labelData}>dosen pengaju</Text>
            <Gap height={5} />
            <Text style={styles.descData}>
              {tambahTopikReducer.dosenpenawar}
            </Text>
            <Gap height={20} />
          </View>
          <View>
            <Text style={styles.labelData}>Judul Topik</Text>
            <Gap height={5} />
            <Text style={styles.descData}>{tambahTopikReducer.judultopik}</Text>
            <Gap height={20} />
          </View>
          <View>
            <Text style={styles.labelData}>Deskripsi Topik</Text>
            <Gap height={5} />
            <Text style={styles.descData}>
              {tambahTopikReducer.deskripsitopik}
            </Text>
            <Gap height={20} />
          </View>
          <View>
            <Text style={styles.labelData}>Bidang Topik</Text>
            <Gap height={5} />
            <Text style={styles.descData}>
              {tambahTopikReducer.bidangtopik}
            </Text>
            <Gap height={20} />
          </View>
          <View>
            <Text style={styles.labelData}>Periode</Text>
            <Gap height={5} />
            <Text style={styles.descData}>{tambahTopikReducer.periode}</Text>
            <Gap height={20} />
          </View>
        </ScrollView>
        <Gap height={15} />
        <View>
          <Button label="Konfirmasi & Kirim" onPress={onSubmit} />
          <Gap height={10} />
          <ButtonDangerSedond
            type="secondary"
            label="batal"
            onPress={() => navigation.navigate('DsnTopikSkripsi')}
          />
        </View>
      </View>
    </View>
  );
};

export default DsnDetailTambahTopik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    padding: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  labelData: {
    fontFamily: fonts.primary[400],
    textTransform: 'capitalize',
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  descData: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
});
