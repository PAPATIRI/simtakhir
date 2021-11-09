import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcArrowBack, Mhs1} from '../../../assets';
import {CardTopikAjuan, TopNavbar} from '../../../components';
import {API_HOST} from '../../../config';
import {setLoading} from '../../../redux/action';
import {colors, getData} from '../../../utils';

const DsnRequestMhs = ({navigation}) => {
  const [data, setData] = useState([]);
  const [idDosen, setIdDosen] = useState('');
  const dispatch = useDispatch();

  const getIdDosen = async () => {
    try {
      const id = await AsyncStorage.getItem('userProfile');
      const dataId = JSON.parse(id);

      dataId ? setIdDosen(dataId.value.email) : 'error user id';
    } catch (err) {
      console.log(err);
    }
  };

  const getTopikAjuan = async () => {
    await getData('token').then(async res => {
      await axios
        .get(`${API_HOST.url}/ajukantopiks`, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          setData(res.data);
          dispatch(setLoading(false));
        })
        .catch(err => {
          console.log(err);
          dispatch(setLoading(false));
        });
    });
  };

  useEffect(() => {
    dispatch(setLoading(true));
    getIdDosen();
    getTopikAjuan();
  }, []);
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Topik Ajuan Mahasiswa"
        onPress={() => navigation.navigate('DsnTopikSkripsi')}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map(itemtopik => {
            if (itemtopik.dosentujuan === idDosen) {
              return (
                <CardTopikAjuan
                  imageCard={Mhs1}
                  key={itemtopik.id}
                  titleCard={itemtopik.judultopik}
                  name={itemtopik.mahasiswapengaju}
                  periode="genap 2020 / 2021"
                  status={itemtopik.status}
                  onPress={() =>
                    navigation.navigate('DsnDetailRequestMhs', itemtopik)
                  }
                />
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default DsnRequestMhs;

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
