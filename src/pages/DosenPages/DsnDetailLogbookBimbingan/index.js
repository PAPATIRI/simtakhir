import axios from 'axios';
import React from 'react';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  IcAcceptedLogbook,
  IcArrowBack,
  IcWaitingLogbook,
} from '../../../assets';
import {Button, Gap, TopNavbar} from '../../../components';
import {API_HOST} from '../../../config';
import {setLoading} from '../../../redux/action';
import {colors, fonts, showMessage} from '../../../utils';

const DsnDetailLogbookBimbingan = ({navigation, route}) => {
  const {
    bimbingan,
    id,
    catatankemajuan,
    updated_at,
    status,
    filetambahan,
    path,
  } = route.params;
  const url =
    'https://project.syaripedia.net/daftarsidang/public/api/updateLogbook';
  const prefixUrl =
    'https://project.syaripedia.net/daftarsidang/storage/app/public/';
  const data = {status: 'terverifikasi'};
  const dispatch = useDispatch();

  const verfikasiLogbook = async () => {
    await axios
      .post(`${url}/${id}`, data)
      .then(res => {
        dispatch(setLoading(false));
        console.log(res);
        navigation.navigate('DsnLogbookBimbingan');
        showMessage('berhasil memverifikasi logbook', 'success');
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage('gagal memverifikasi logbook', 'danger');
        console.log(err);
      });
  };

  const onSubmit = () => {
    dispatch(setLoading(true));
    verfikasiLogbook();
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Detail Logbook"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.date}>
            <Text style={styles.dateText}>
              {new Date(updated_at).toDateString()}
            </Text>
          </View>
          <Gap height={16} />
          <View>
            <Text style={styles.labelData}>Kegiatan</Text>
            <Gap height={2} />
            <Text style={styles.descData}>{bimbingan}</Text>
          </View>
          <Gap height={16} />
          <View>
            <Text style={styles.labelData}>Catatan Kemajuan</Text>
            <Gap height={2} />
            <Text style={styles.descData}>{catatankemajuan}</Text>
          </View>
          <Gap height={16} />
          <View>
            <Text style={styles.labelData}>File Tambahan</Text>
            <Gap height={2} />
            <Text style={styles.descData}>{filetambahan}</Text>
            <Gap height={2} />
            <Image source={{uri: `${prefixUrl}${path}`}} style={styles.image} />
          </View>
          <Gap height={16} />
          <View>
            <Text style={styles.labelData}>Paraf Dosen Pembimbing</Text>
            <Gap height={2} />
            <View style={styles.paraf}>
              {status == 'menunggu' ? (
                <IcWaitingLogbook />
              ) : (
                <IcAcceptedLogbook />
              )}
              <Text style={styles.parafText}>{status}</Text>
            </View>
          </View>
        </ScrollView>
        {status == 'terverifikasi' ? (
          <Text></Text>
        ) : (
          <View>
            <Gap height={20} />
            <Button label="verifikasi Logbook" onPress={onSubmit} />
          </View>
        )}
      </View>
    </View>
  );
};

export default DsnDetailLogbookBimbingan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dateText: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
  },
  labelData: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
  descData: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
  paraf: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  parafText: {
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    textTransform: 'capitalize',
    fontSize: 16,
    marginLeft: 10,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 20,
  },
});
