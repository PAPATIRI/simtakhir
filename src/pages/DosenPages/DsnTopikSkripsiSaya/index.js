import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {CardTopikSkripsiDsn, Gap, TopNavbarSearch} from '../../../components';
import {API_HOST} from '../../../config';
import {setLoading} from '../../../redux/action';
import {colors, fonts, getData} from '../../../utils';

const DsnTopikSkripsiSaya = ({navigation}) => {
  const [data, setData] = useState([]);
  const [idDosen, setIdDosen] = useState('');
  // searching state
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const getIdDosen = async () => {
    try {
      const id = await AsyncStorage.getItem('userProfile');
      const dataId = JSON.parse(id);
      console.log('data get user: ', dataId);

      dataId ? setIdDosen(dataId.value.dosen.id) : 'error id';
    } catch (err) {
      console.log(err);
    }
  };

  const getDataTopik = async () => {
    await getData('token').then(async res => {
      await axios
        .get(`${API_HOST.url}/topikskripsis`, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          console.log('data topik: ', res.data);
          console.log('data id dosen: ', idDosen);
          setData(res.data);
          setFilteredData(res.data);
          setMasterData(res.data);
          dispatch(setLoading(false));
        })
        .catch(err => {
          console.log(err);
          dispatch(setLoading(false));
        });
    });
  };

  const searchFilter = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.judultopik ? item.judultopik : '';
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

  useEffect(() => {
    dispatch(setLoading(true));
    getIdDosen();
    getDataTopik();
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
          style={styles.input}
          placeholder="cari topik dosen"
          onChangeText={text => searchFilter(text)}
          value={search}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>daftar penawaran topik anda</Text>
        <Gap height={10} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollist}>
          {filteredData.map(data => {
            if (data.dosen.id == idDosen) {
              return (
                <CardTopikSkripsiDsn
                  color={colors.text.accent}
                  title={data.judultopik}
                  key={data.id}
                  bidang={data.bidangtopik}
                  tanggal={new Date(data.updated_at).toDateString()}
                  pendaftar={2}
                  status="open"
                  onPress={() =>
                    navigation.navigate('DsnDetailTopikSaya', data)
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

export default DsnTopikSkripsiSaya;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  scrollist: {
    paddingHorizontal: 5,
    paddingVertical: 5,
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
  },
  input: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
});
