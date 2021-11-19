import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {LoadingSpinner, TopNavbar} from '../../../components';
import CardHasilAjuan from '../../../components/moleculs/CardHasilAjuan';
import {API_HOST} from '../../../config';
import {setLoading} from '../../../redux/action';
import {colors, getData} from '../../../utils';

const MhsHasilAjuanTopik = ({navigation}) => {
  const [data, setData] = useState([]);
  const [idMhs, setIdMhs] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getIdMhs = async () => {
    try {
      const id = await AsyncStorage.getItem('userProfile');
      const dataId = JSON.parse(id);

      dataId ? setIdMhs(dataId.value.email) : 'error id';
    } catch (err) {
      console.log(err);
    }
  };

  const getDataTopikAjuan = async () => {
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
          setData(res.data);
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getIdMhs();
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
    padding: 20,
  },
});
