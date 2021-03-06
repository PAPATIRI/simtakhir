import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {IcArrowBack} from '../../../assets';
import {CardMhsBimbingan, LoadingSpinner} from '../../../components';
import {API_HOST} from '../../../config';
import {colors, getData} from '../../../utils';

const DsnBimbingan = ({navigation}) => {
  const [data, setData] = useState([]);
  const [idDosen, setIdDosen] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  //search
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  const getDataBimbingan = async () => {
    let idDosen = await getDataDosen();
    let idku = JSON.parse(idDosen);

    await getData('token').then(async res => {
      await axios
        .get(`${API_HOST.url}/mahasiswas`, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          setIsLoading(false);
          setIdDosen(idku.value.username);
          setData(res.data);
          setFilteredData(res.data);
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        });
    });
  };

  const searchFilter = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.nama ? item.nama.toLowerCase() : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(data);
      setSearch(text);
    }
  };

  const getDataDosen = () => {
    return new Promise(function (resolve, reject) {
      const id = AsyncStorage.getItem('userProfile');
      resolve(id);
    });
  };

  useEffect(() => {
    getDataBimbingan();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.navWrapper}>
        <TouchableOpacity
          style={styles.iconLeft}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <IcArrowBack />
        </TouchableOpacity>
        <TextInput
          placeholder="cari mahasiswa"
          style={styles.textInput}
          onChangeText={text => searchFilter(text)}
          value={search}
        />
      </View>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            filteredData.map(data => {
              if (data.dosen != null) {
                if (data.dosen.nama == idDosen) {
                  return (
                    <CardMhsBimbingan
                      profileImg={data.avatar.formats.thumbnail.url}
                      key={data.id}
                      nama={data.nama}
                      status={data.status}
                      periode={data.nim}
                      onPress={() =>
                        navigation.navigate('DsnDetailBimbingan', data)
                      }
                    />
                  );
                }
              }
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default DsnBimbingan;

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
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  navWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 16,
    height: 56,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  iconLeft: {
    padding: 5,
    marginRight: 5,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
  },
});
