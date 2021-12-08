import {assertBlock} from '@babel/types';
import React, {useEffect} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {Button, ButtonDangerSedond, Gap, TopNavbar} from '../../../components';
import {daftarSemproAction, setLoading} from '../../../redux/action';
import {colors, fonts, showMessage} from '../../../utils';

const MhsDetailDaftarSidangSempro = ({navigation}) => {
  const daftarSemproReducer = useSelector(state => state.daftarSemproReducer);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (
      daftarSemproReducer.buktipembayaran != null &&
      daftarSemproReducer.toefl != null &&
      daftarSemproReducer.naskahbab123 != null &&
      daftarSemproReducer.transkipnilai != null
    ) {
      dispatch(setLoading(true));
      dispatch(daftarSemproAction(daftarSemproReducer, navigation));
    } else {
      showMessage('pilih file terlebih dahulu', 'danger');
    }
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="detail file persyaratan"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}>
          <View>
            <Text style={styles.label}>bukti pembayaran</Text>
            <Text style={styles.data}>
              {daftarSemproReducer.buktipembayaran == null
                ? 'belum pilih file'
                : `${
                    daftarSemproReducer.buktipembayaran[0].name
                  }    ${Math.round(
                    daftarSemproReducer.buktipembayaran[0].size /
                      Math.pow(1024, 1),
                  )} KB`}
            </Text>
          </View>
          <Gap height={16} />
          <View>
            <Text style={styles.label}>toefl</Text>
            <Text style={styles.data}>
              {daftarSemproReducer.toefl == null
                ? 'belum pilih file'
                : `${daftarSemproReducer.toefl[0].name}    ${Math.round(
                    daftarSemproReducer.toefl[0].size / Math.pow(1024, 1),
                  )} KB`}
            </Text>
          </View>
          <Gap height={16} />
          <View>
            <Text style={styles.label}>naskah bab 123</Text>
            <Text style={styles.data}>
              {daftarSemproReducer.naskahbab123 == null
                ? 'belum pilih file'
                : `${daftarSemproReducer.naskahbab123[0].name}    ${Math.round(
                    daftarSemproReducer.naskahbab123[0].size /
                      Math.pow(1024, 1),
                  )} KB`}
            </Text>
          </View>
          <Gap height={16} />
          <View>
            <Text style={styles.label}>transkip nilai</Text>
            <Text style={styles.data}>
              {daftarSemproReducer.transkipnilai == null
                ? 'belum pilih file'
                : `${daftarSemproReducer.transkipnilai[0].name}    ${Math.round(
                    daftarSemproReducer.transkipnilai[0].size /
                      Math.pow(1024, 1),
                  )} KB`}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.btnWrapper}>
          <Button label="Konfirmasi & kirim" onPress={onSubmit} />
          <Gap height={10} />
          <ButtonDangerSedond
            label="batal"
            type="secondary"
            onPress={() => {
              Alert.alert(
                'Batal Daftar Sempro',
                'Apakah Kamu Yakin Ingin Membatalkan Daftar Sempro',
                [
                  {
                    text: 'tidak',
                    style: 'cancel',
                  },
                  {
                    text: 'Ya',
                    onPress: () => {
                      navigation.navigate('MhsDaftarSidang');
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

export default MhsDetailDaftarSidangSempro;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingVertical: 20,
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  data: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
  btnWrapper: {
    paddingHorizontal: 20,
  },
});
