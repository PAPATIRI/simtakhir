import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {
  CardPendaftarTopik,
  DataKosong,
  Gap,
  TopNavbar,
} from '../../../components';
import {API_HOST} from '../../../config';
import {setLoading} from '../../../redux/action';
import {colors, getData, showMessage} from '../../../utils';

const DsnPendaftarTopikSaya = ({navigation, route}) => {
  const {mahasiswapendaftar, id} = route.params;
  const [dataPendaftar, setDataPendaftar] = useState([]);

  const dispatch = useDispatch();

  const getDataPendaftar = async () => {
    await getData('token').then(async res => {
      await axios
        .get(`${API_HOST.url}/mahasiswas?nama_eq=${mahasiswapendaftar}`, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          console.log('data pendaftar: ', res.data);
          setDataPendaftar(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  const terimaPendaftar = async () => {
    let data = {mahasiswaterpilih: mahasiswapendaftar, status: 'closed'};

    await getData('token').then(async res => {
      await axios
        .put(`${API_HOST.url}/topikskripsis/${id}`, data, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          console.log(res);
          dispatch(setLoading(false));
          showMessage('berhasil menerima pendaftar topik', 'success');
        })
        .catch(err => {
          console.log(err);
          dispatch(setLoading(false));
          showMessage('gagal menerima pendaftar topik', 'danger');
        });
    });
  };

  const onSubmit = () => {
    dispatch(setLoading(true));
    terimaPendaftar();
  };

  useEffect(() => {
    getDataPendaftar();
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Pendaftar Topik Anda"
        onPress={() => navigation.navigate('DsnDetailTopikSaya')}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollStyle}>
          {dataPendaftar.length == 0 ? (
            <DataKosong
              title="opps"
              desc="sepertinya belum ada mahasiwa yang mendaftar di topikmu"
            />
          ) : (
            dataPendaftar.map(pendaftar => {
              return (
                <View>
                  <CardPendaftarTopik
                    key={pendaftar.user.id}
                    nameCard={pendaftar.nama}
                    nim={pendaftar.nim}
                    imageCard={pendaftar.avatar.formats.small.url}
                    onPress={onSubmit}
                  />
                  <Gap height={10} />
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default DsnPendaftarTopikSaya;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollStyle: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
