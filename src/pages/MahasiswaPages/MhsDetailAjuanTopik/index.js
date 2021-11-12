import React from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {TopNavbar, Gap, Button, ButtonDangerSedond} from '../../../components';
import {colors, fonts} from '../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {ajukanTopikAction} from '../../../redux/action/ajukantopik';
import {setLoading} from '../../../redux/action';

const MhsDetailAjuanTopik = ({navigation}) => {
  const ajukanTopikReducer = useSelector(state => state.ajukanTopikReducer);
  console.log('data form all: ', ajukanTopikReducer);
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form data: ', ajukanTopikReducer);
    dispatch(setLoading(true));
    dispatch(ajukanTopikAction(navigation, ajukanTopikReducer));
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Konfirmasi Data Topik"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.dataDetail}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.labelData}>mahasiswa pengaju</Text>
              <Text style={styles.descData}>
                {ajukanTopikReducer.mahasiswapengaju}
              </Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Judul Topik</Text>
              <Text style={styles.descData}>
                {ajukanTopikReducer.judultopik}
              </Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Deskripsi Topik</Text>
              <Text style={styles.descData}>
                {ajukanTopikReducer.dekripsitopik}
              </Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Bidang Topik</Text>
              <Text style={styles.descData}>
                {ajukanTopikReducer.bidangtopik}
              </Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Dosen Pembimbing</Text>
              <Text style={styles.descData}>
                {ajukanTopikReducer.dosentujuan}
              </Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Periode</Text>
              <Text style={styles.descData}>{ajukanTopikReducer.periode}</Text>
            </View>
          </ScrollView>
          <Gap height={10} />
          <Button label="Konfirmasi & ajukan" onPress={onSubmit} />
          <Gap height={10} />
          <ButtonDangerSedond
            type="secondary"
            label="batal"
            // onPress={navigation.navigate('MhsAjukanTopik')}
            onPress={() => {
              Alert.alert(
                'Batal Mengajukan Topik',
                'Apakah Kamu Yakin Ingin Membatalkan Pengajuan Topik?',
                [
                  {
                    text: 'batal',
                    style: 'cancel',
                  },
                  {
                    text: 'ya',
                    onPress: () => {
                      navigation.navigate('MhsTopikSkripsi');
                    },
                  },
                ],
                {cancelable: false},
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MhsDetailAjuanTopik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  labelTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  dataDetail: {
    flex: 1,
    justifyContent: 'space-between',
  },
  labelData: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    textTransform: 'capitalize',
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
