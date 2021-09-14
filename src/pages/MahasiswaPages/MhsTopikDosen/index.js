import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IlUserDefault} from '../../../assets';
import {Gap, TopNavbarSearch} from '../../../components';
import CardTopikSkripsi from '../../../components/moleculs/CardTopikSkripsi';
import {setLoading} from '../../../redux/action';
import {getTopikDosenAction} from '../../../redux/action/topikdosen';
import {colors, fonts} from '../../../utils';
import {dosenImg} from './dosenImg';

const MhsTopikDosen = ({navigation}) => {
  const dispatch = useDispatch();
  const {topikdosens} = useSelector(state => state.topikDosenReducer);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getTopikDosenAction());
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbarSearch onPress={() => navigation.navigate('MhsTopikSkripsi')} />
      <View style={styles.content}>
        <Text style={styles.title}>Daftar Topik Tugas Akhir</Text>
        <Gap height={10} />
        {topikdosens.map(itemtopik => {
          return (
            <CardTopikSkripsi
              key={itemtopik.id}
              title={itemtopik.judultopik}
              dosen={itemtopik.dosen.nidn}
              bidang={itemtopik.bidangtopik.namabidang}
              periode={itemtopik.periode.tahunperiode}
              pendaftar="0"
              imgDosen={dosenImg(itemtopik.dosen.nidn)}
              onPress={() =>
                navigation.navigate('MhsDetailTopikDosen', itemtopik)
              }
            />
          );
        })}
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
});
