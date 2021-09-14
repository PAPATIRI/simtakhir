import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ArdiansyahImg, IcArrowBack} from '../../../assets';
import {
  Button,
  ButtonDangerSedond,
  CardProfile,
  Gap,
  TopNavbar,
} from '../../../components';
import {colors, fonts} from '../../../utils';
import {dosenImg} from '../MhsTopikDosen/dosenImg';

const MhsDetailTopikDosen = ({navigation, route}) => {
  const {judultopik, deskripsitopik, bidangtopik, periode, dosen} =
    route.params;
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Detail Topik Dosen"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <CardProfile
          image={dosenImg(dosen.nidn)}
          name={dosen.nidn}
          label1="pendaftar"
          data1="2 mahasiswa"
          label2="status"
          data2="open"
        />
        <Gap height={20} />
        <View style={styles.dataWrapper}>
          <ScrollView>
            <View>
              <Text style={styles.labelData}>judul</Text>
              <Text style={styles.data}>{judultopik}</Text>
              <Gap height={20} />
            </View>
            <View>
              <Text style={styles.labelData}>Deskripsi</Text>
              <Text style={styles.data}>{deskripsitopik}</Text>
              <Gap height={20} />
            </View>
            <View>
              <Text style={styles.labelData}>Bidang</Text>
              <Text style={styles.data}>{bidangtopik.namabidang}</Text>
              <Gap height={20} />
            </View>
            <View>
              <Text style={styles.labelData}>Periode</Text>
              <Text style={styles.data}>{periode.tahunperiode}</Text>
              <Gap height={20} />
            </View>
          </ScrollView>
          <Gap height={15} />
          <Button label="Ambil Topik" />
          <Gap height={10} />
          <ButtonDangerSedond
            label="Cari Topik Lainnya"
            type="secondary"
            onPress={() => navigation.navigate('MhsTopikDosen')}
          />
        </View>
      </View>
    </View>
  );
};

export default MhsDetailTopikDosen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  dataWrapper: {
    flex: 1,
  },
  labelData: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  data: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
});
