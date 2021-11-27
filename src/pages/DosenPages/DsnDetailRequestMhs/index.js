import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {TopNavbar, Gap, Button, ButtonDangerSedond} from '../../../components';
import {API_HOST} from '../../../config';
import {setLoading} from '../../../redux/action';
import {colors, fonts, getData, showMessage} from '../../../utils';

const DsnDetailRequestMhs = ({navigation, route}) => {
  const {
    judultopik,
    dekripsitopik,
    bidangtopik,
    mahasiswapengaju,
    updated_at,
    status,
    periode,
    id,
  } = route.params;

  const dispatch = useDispatch();

  const tolakTopik = async () => {
    const updateStatus = {status: 'ditolak'};

    await getData('token').then(async res => {
      await axios
        .put(`${API_HOST.url}/ajukantopiks/${id}`, updateStatus, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          dispatch(setLoading(false));
          navigation.navigate('DsnRequestMhs');
        })
        .catch(err => {
          console.log(err);
          dispatch(setLoading(false));
        });
    });
  };

  const terimaTopik = async () => {
    const updateStatus = {status: 'diterima'};

    await getData('token').then(async res => {
      await axios
        .put(`${API_HOST.url}/ajukantopiks/${id}`, updateStatus, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          dispatch(setLoading(false));
          navigation.navigate('DsnRequestMhs');
        })
        .catch(err => {
          console.log(err);
          dispatch(setLoading(false));
        });
    });
  };

  const onTolak = () => {
    dispatch(setLoading(true));
    tolakTopik();
  };

  const onTerima = () => {
    dispatch(setLoading(true));
    terimaTopik();
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Detail Topik Ajuan"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.labelTitle}>Pengaju Topik</Text>
          <Gap height={5} />
          <View style={styles.botHeader}>
            <Text style={styles.descData}>{mahasiswapengaju}</Text>
            <Text style={styles.descData}>
              {new Date(updated_at).toDateString()}
            </Text>
          </View>
          <Gap height={15} />
        </View>
        <View style={styles.divider}></View>
        <Gap height={30} />
        <View style={styles.dataDetail}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.labelData}>Judul Topik</Text>
              <Gap height={2} />
              <Text style={styles.descData}>{judultopik}</Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Deskripsi Topik</Text>
              <Gap height={2} />
              <Text style={styles.descData}>{dekripsitopik}</Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Bidang Topik</Text>
              <Gap height={2} />
              <Text style={styles.descData}>{bidangtopik}</Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>status</Text>
              <Gap height={2} />
              <Text style={styles.descData}>{status}</Text>
            </View>
          </ScrollView>
          <Gap height={10} />
          <Button label="Terima Ajuan" onPress={onTerima} />
          <Gap height={10} />
          <ButtonDangerSedond label="Tolak Ajuan" onPress={onTolak} />
        </View>
      </View>
    </View>
  );
};

export default DsnDetailRequestMhs;

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
  labelTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.blue,
    lineHeight: 16 * 1.5,
  },
  botHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: colors.blackPrimary,
    height: 2,
  },
  dataDetail: {
    flex: 1,
    justifyContent: 'space-between',
  },
  labelData: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textTransform: 'capitalize',
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  descData: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
});
