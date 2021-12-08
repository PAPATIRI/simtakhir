import React from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {Button, ButtonDangerSedond, Gap, TopNavbar} from '../../../components';
import {daftarPendadaranAction, setLoading} from '../../../redux/action';
import {colors, fonts, showMessage} from '../../../utils';

const MhsDetailDaftarPendadaran = ({navigation}) => {
  const daftarPendadaranReducer = useSelector(
    state => state.daftarPendadaranReducer,
  );
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (
      daftarPendadaranReducer.buktipembayaran != null &&
      daftarPendadaranReducer.toefl != null &&
      daftarPendadaranReducer.naskahbab123 != null &&
      daftarPendadaranReducer.transkipnilai != null &&
      daftarPendadaranReducer.buktibebasspp != null
    ) {
      dispatch(setLoading(true));
      dispatch(daftarPendadaranAction(daftarPendadaranReducer, navigation));
    } else {
      showMessage('pilih file terlebih dahulu', 'danger');
    }
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Detail file Persyaratan"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollStyle}>
          <View>
            <Text style={styles.label}>bukti pembayaran</Text>
            <Gap height={2} />
            <Text style={styles.data}>
              {daftarPendadaranReducer.buktipembayaran == null
                ? 'belum pilih file'
                : `${
                    daftarPendadaranReducer.buktipembayaran[0].name
                  }    ${Math.round(
                    daftarPendadaranReducer.buktipembayaran[0].size /
                      Math.pow(1024, 1),
                  )} KB`}
            </Text>
            <Gap height={16} />
            <Text style={styles.label}>Toefl</Text>
            <Gap height={2} />
            <Text style={styles.data}>
              {daftarPendadaranReducer.toefl == null
                ? 'belum pilih file'
                : `${daftarPendadaranReducer.toefl[0].name}    ${Math.round(
                    daftarPendadaranReducer.toefl[0].size / Math.pow(1024, 1),
                  )} KB`}
            </Text>
            <Gap height={16} />
            <Text style={styles.label}>naskah bab 123</Text>
            <Gap height={2} />
            <Text style={styles.data}>
              {daftarPendadaranReducer.naskahbab123 == null
                ? 'belum pilih file'
                : `${
                    daftarPendadaranReducer.naskahbab123[0].name
                  }    ${Math.round(
                    daftarPendadaranReducer.naskahbab123[0].size /
                      Math.pow(1024, 1),
                  )} KB`}
            </Text>
            <Gap height={16} />
            <Text style={styles.label}>transkip nilai</Text>
            <Gap height={2} />
            <Text style={styles.data}>
              {daftarPendadaranReducer.transkipnilai == null
                ? 'belum pilih file'
                : `${
                    daftarPendadaranReducer.transkipnilai[0].name
                  }    ${Math.round(
                    daftarPendadaranReducer.transkipnilai[0].size /
                      Math.pow(1024, 1),
                  )} KB`}
            </Text>
            <Gap height={16} />
            <Text style={styles.label}>bukti bebas spp</Text>
            <Gap height={2} />
            <Text style={styles.data}>
              {daftarPendadaranReducer.buktibebasspp == null
                ? 'belum pilih file'
                : `${
                    daftarPendadaranReducer.buktibebasspp[0].name
                  }    ${Math.round(
                    daftarPendadaranReducer.buktibebasspp[0].size /
                      Math.pow(1024, 1),
                  )} KB`}
            </Text>
            <Gap height={16} />
          </View>
          <View>
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
        </ScrollView>
      </View>
    </View>
  );
};

export default MhsDetailDaftarPendadaran;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  scrollStyle: {
    flex: 1,
    justifyContent: 'space-between',
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
});
