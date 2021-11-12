import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {IcArrowBack, IlUserDefault} from '../../../assets';
import {Gap, TopNavbarSearch} from '../../../components';
import CardTopikSkripsi from '../../../components/moleculs/CardTopikSkripsi';
import {API_HOST} from '../../../config';
import {setLoading} from '../../../redux/action';
import {getTopikDosenAction} from '../../../redux/action/topikdosen';
import {colors, fonts, getData} from '../../../utils';
import {dosenImg} from './dosenImg';

const MhsTopikDosen = ({navigation}) => {
  const dispatch = useDispatch();
  const {topikdosens} = useSelector(state => state.topikDosenReducer);
  //new
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  const getDataTopik = async () => {
    await getData('token').then(async res => {
      await axios
        .get(`${API_HOST.url}/topikskripsis?_sort=created_at:DESC`, {
          headers: {
            Authorization: `Bearer ${res.value}`,
          },
        })
        .then(res => {
          setData(res.data);
          setFilteredData(res.data);
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
    const willFocusSubscription = navigation.addListener('focus', () => {
      getDataTopik();
    });
    dispatch(setLoading(true));
    getDataTopik();

    return willFocusSubscription;
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
        <Text style={styles.title}>Daftar Topik Tugas Akhir</Text>
        <Gap height={10} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredData.map(itemtopik => {
            return (
              <CardTopikSkripsi
                key={itemtopik.id}
                title={itemtopik.judultopik}
                dosen={itemtopik.dosenpenawar}
                bidang={itemtopik.bidangtopik}
                status={itemtopik.status}
                periode={itemtopik.periode}
                status={itemtopik.status}
                onPress={() =>
                  navigation.navigate('MhsDetailTopikDosen', itemtopik)
                }
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default MhsTopikDosen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
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
});
