import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {CardHasilAjuan, LoadingSpinner, TopNavbar} from '../../../components';
import {API_HOST} from '../../../config';
import {colors, getData} from '../../../utils';

const MhsHasilAjuanTopik = ({navigation}) => {
  const [data, setData] = useState([]);
  const [idMhs, setIdMhs] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getIdMhs = async () => {
    return new Promise(function (resolve, reject) {
      const id = AsyncStorage.getItem('userProfile');
      resolve(id);
    });
  };

  const getDataTopikAjuan = async () => {
    let idMahasiswa = await getIdMhs();
    let idku = JSON.parse(idMahasiswa);
    console.log('mahasiswa: ', idku.value.email);

    await getData('token').then(async res => {
      await axios
        .get(`${API_HOST.url}/ajukantopiks?_sort=created_at:DESC`, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          console.log('data ajuan: ', res.data);
          setIsLoading(false);
          setIdMhs(idku.value.email);
          setData(res.data);
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getDataTopikAjuan();
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Ajuan Topik Anda"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.navigate('MhsTopikSkripsi')}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            paddingHorizontal: 20,
            paddingTop: 2,
          }}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            data.map(item => {
              if (item.mahasiswapengaju == idMhs) {
                return (
                  <CardHasilAjuan
                    key={item.id}
                    titleCard={item.judultopik}
                    descCard={item.bidangtopik}
                    dosenName={item.dosentujuan}
                    status={item.status}
                    onPress={() =>
                      navigation.navigate('MhsDetailHasilAjuan', item)
                    }
                  />
                );
              }
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default MhsHasilAjuanTopik;

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
    paddingVertical: 20,
  },
});
