import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcArrowBack} from '../../../assets';
import {CardTopikSkripsiDsn, LoadingSpinner} from '../../../components';
import {API_HOST} from '../../../config';
import {colors, getData} from '../../../utils';

const DsnTopikSkripsiSaya = ({navigation}) => {
  const [data, setData] = useState([]);
  const [idDosen, setIdDosen] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // searching state
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const getIdDosen = async () => {
    return new Promise(function (resolve, reject) {
      const id = AsyncStorage.getItem('userProfile');
      resolve(id);
    });
  };

  const getDataTopik = async () => {
    let getId = await getIdDosen();
    let idku = JSON.parse(getId);

    await getData('token').then(async res => {
      await axios
        .get(`${API_HOST.url}/topikskripsis?_sort=created_at:DESC`, {
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
          contentContainerStyle={styles.scrollist}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            filteredData.map(data => {
              if (data.dosenpenawar == idDosen) {
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
            })
          )}
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
    paddingHorizontal: 20,
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 20,
  },
});
