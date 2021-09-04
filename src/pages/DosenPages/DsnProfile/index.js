import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {ArdiansyahImg, IcHamburgerMenu} from '../../../assets';
import {TopNavbar, CardProfile, Gap} from '../../../components';
import {colors, fonts} from '../../../utils';

const screenWidth = Dimensions.get('window').width;

const dataStatusMahasiswa = [
  {
    name: 'Metopen',
    jumlahMahasiswaa: 7,
    color: '#F7BACE',
    legendFontColor: '#7f7f7f',
    legendFontSize: 12,
  },
  {
    name: 'Skripsi',
    jumlahMahasiswaa: 11,
    color: '#855964',
    legendFontColor: '#7f7f7f',
    legendFontSize: 12,
  },
];

const dataMahasiswa = [
  {
    name: '2020 / 2021',
    jumlahMahasiswa: 15,
    color: '#0059B2',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  },
  {
    name: '2021 / 2022',
    jumlahMahasiswa: 8,
    color: '#FFA555',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  },
  {
    name: '2019 / 2020',
    jumlahMahasiswa: 3,
    color: '#F7BACE',
    legendFontColor: '#7f7f7f',
    legendFontSize: 12,
  },
];

const DsnProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.topNavWrapper}>
        <TopNavbar titleBar="Profil Anda" />
        <View style={styles.emptyView}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile
            image={ArdiansyahImg}
            name="Ardiansyah S.T.,M.Cs"
            label1="total topik"
            data1="10 topik"
            label2="total mahasiswa bimbingan"
            data2="10 Mahasiswa"
          />
        </View>
        <View style={styles.chart}>
          <ScrollView
            showsHorizontalScrollIndicator={true}
            horizontal
            contentContainerStyle={styles.scroll}>
            <View>
              <Text style={styles.chartTitle}>
                persentase Periode Mahasiswa Bimbingan
              </Text>
              <PieChart
                data={dataMahasiswa}
                width={screenWidth}
                height={130}
                chartConfig={{
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={'jumlahMahasiswa'}
                center={[0, 0]}
              />
            </View>
            {/* <Gap height={20} /> */}
            <View>
              <Text style={styles.chartTitle}>
                persentase Status Mahasiswa Bimbingan
              </Text>
              <PieChart
                data={dataStatusMahasiswa}
                width={screenWidth}
                height={130}
                chartConfig={{
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={'jumlahMahasiswaa'}
                center={[0, 0]}
              />
            </View>
          </ScrollView>
        </View>
        <Gap height={20} />
        <View style={styles.menuList}>
          <View style={styles.menuWrapper}>
            <Text style={styles.menuTitle}>Total Mahasiswa Bimbingan</Text>
            <View style={styles.menu}>
              <Text style={styles.menuName}>20 Mahasiswa</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonWrapper}
                onPress={() => {
                  navigation.navigate('DsnBimbingan');
                }}>
                <Text style={styles.buttonText}>selengkapnya</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.menuWrapper}>
            <Text style={styles.menuTitle}>Total Topik Tugas Akhir</Text>
            <View style={styles.menu}>
              <Text style={styles.menuName}>10 Topik</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonWrapper}
                onPress={() => {
                  navigation.navigate('DsnBimbingan');
                }}>
                <Text style={styles.buttonText}>selengkapnya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DsnProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 3,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardWrapper: {
    marginTop: -75,
    paddingHorizontal: 20,
  },
  topNavWrapper: {
    flex: 1,
  },
  emptyView: {
    flex: 1,
  },
  chart: {
    paddingVertical: 20,
  },
  chartTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 5,
    paddingLeft: 20,
  },
  menuList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    lineHeight: 18 * 1.5,
    color: colors.text.primary,
    marginBottom: 1,
  },
  menuName: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  buttonWrapper: {
    backgroundColor: colors.accent,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.white,
  },
});
