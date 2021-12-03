import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IcArrowBack} from '../../../assets';
import {Button, CardProfile, Gap, TopNavbar} from '../../../components';
import {API_HOST} from '../../../config';
import {colors, fonts, getData} from '../../../utils';

const MhsDetailTopikDosen = ({navigation, route}) => {
  const {
    judultopik,
    deskripsitopik,
    bidangtopik,
    periode,
    dosen,
    dosenpenawar,
    status,
  } = route.params;
  const [imageDosen, setImageDosen] = useState(null);
  const [namaDosen, setNamaDosen] = useState('');
  const [emailDosen, setEmailDosen] = useState('');
  const [nidn, setNidn] = useState('');

  const getDataTopik = async () => {
    await getData('token').then(async res => {
      await axios
        .get(`${API_HOST.url}/dosens?nama_eq=${dosenpenawar}`, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          setImageDosen(res.data[0].avatar.url);
          setNamaDosen(res.data[0].nama);
          setEmailDosen(res.data[0].user.email);
          setNidn(res.data[0].nidy);
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getDataTopik();
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Detail Topik Dosen"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <CardProfile
          image={imageDosen}
          name={namaDosen}
          email={emailDosen}
          label1="NIDN"
          data1={nidn}
          label2="status"
          data2={status}
        />
        <Gap height={20} />
        <View style={styles.dataWrapper}>
          <ScrollView>
            <View>
              <Text style={styles.labelData}>judul</Text>
              <Text style={styles.data}>{dosenpenawar}</Text>
              <Gap height={20} />
            </View>
            <View>
              <Text style={styles.labelData}>Deskripsi</Text>
              <Text style={styles.data}>{deskripsitopik}</Text>
              <Gap height={20} />
            </View>
            <View>
              <Text style={styles.labelData}>Bidang</Text>
              <Text style={styles.data}>{bidangtopik}</Text>
              <Gap height={20} />
            </View>
            <View>
              <Text style={styles.labelData}>Periode</Text>
              <Text style={styles.data}>{periode}</Text>
              <Gap height={20} />
            </View>
          </ScrollView>
          <Gap height={15} />
          {status == 'open' ? (
            <Button label="Ambil Topik" />
          ) : (
            <Text style={styles.anounctext}>
              topik ini sudah tidak bisa diambil!
            </Text>
          )}
          <Gap height={10} />
          <Button
            label="Cari Topik Lainnya"
            type="secondaryAccent"
            onPress={() => navigation.navigate('MhsTopikDosen')}
          />
        </View>
      </View>
    </View>
  );
};

export default MhsDetailTopikDosen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  dataWrapper: {
    flex: 1,
  },
  labelData: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textTransform: 'capitalize',
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  data: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  anounctext: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    textTransform: 'capitalize',
    color: colors.text.danger,
    textAlign: 'center',
  },
});
