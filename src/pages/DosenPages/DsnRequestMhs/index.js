import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {CardTopikAjuan, LoadingSpinner, TopNavbar} from '../../../components';
import {API_HOST} from '../../../config';
import {colors, getData} from '../../../utils';

const DsnRequestMhs = ({navigation}) => {
  const [data, setData] = useState([]);
  const [idDosen, setIdDosen] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getIdDosen = async () => {
    return new Promise(function (resolve, reject) {
      const id = AsyncStorage.getItem('userProfile');
      resolve(id);
    });
  };

  const getTopikAjuan = async () => {
    let idDosen = await getIdDosen();
    let idku = JSON.parse(idDosen);

    await getData('token')
      .then(async res => {
        await axios
          .get(`${API_HOST.url}/ajukantopiks?_sort=created_at:DESC`, {
            headers: {
              Authorization: `Bearer ${res.value}`,
            },
          })
          .then(res => {
            setIsLoading(false);
            setIdDosen(idku.value.dosen.nama);
            setData(res.data);
          })
          .catch(err => {
            setIsLoading(false);
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      getTopikAjuan();
    });

    return willFocusSubscription;
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Topik Ajuan Mahasiswa"
        onPress={() => navigation.navigate('DsnTopikSkripsi')}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 5}}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            data.map(itemtopik => {
              if (
                itemtopik.dosentujuan == idDosen &&
                itemtopik.status != 'ditolak'
              ) {
                return (
                  <CardTopikAjuan
                    key={itemtopik.id}
                    titleCard={itemtopik.judultopik}
                    name={itemtopik.mahasiswapengaju}
                    periode={itemtopik.periode}
                    status={itemtopik.status}
                    onPress={() =>
                      navigation.navigate('DsnDetailRequestMhs', itemtopik)
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

export default DsnRequestMhs;

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
    paddingVertical: 15,
  },
});
