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
import {IcArrowBack} from '../../../assets';
import {DataKosong, Gap, LoadingSpinner} from '../../../components';
import CardTopikSkripsi from '../../../components/moleculs/CardTopikSkripsi';
import {API_HOST} from '../../../config';
import {colors, fonts, getData} from '../../../utils';

const MhsTopikDosen = ({navigation}) => {
  const dispatch = useDispatch();
  const {topikdosens} = useSelector(state => state.topikDosenReducer);
  const [isLoading, setIsLoading] = useState(true);
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
          setIsLoading(false);
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 2,
          }}>
          {isLoading ? (
            <LoadingSpinner />
          ) : filteredData.length == 0 ? (
            <DataKosong
              title="kosong"
              desc="sepertinya belum ada tawaran topik dari dosen untuk sekarang"
            />
          ) : (
            filteredData.map(itemtopik => {
              return (
                <CardTopikSkripsi
                  key={itemtopik.id}
                  title={itemtopik.judultopik}
                  dosen={itemtopik.dosenpenawar}
                  bidang={itemtopik.bidangtopik}
                  status={itemtopik.status}
                  status={itemtopik.status}
                  onPress={() =>
                    navigation.navigate('MhsDetailTopikDosen', itemtopik)
                  }
                />
              );
            })
          )}
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
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 18,
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
