import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const DsnDetailBimbingan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Detail Mahasiswa Bimbingan"
        onPress={() => {
          navigation.navigate('DsnBimbingan');
        }}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.label}>Nama Mahasiswa</Text>
          <Text style={styles.data}>siska amelia (1700018192)</Text>
          <Gap height={15} />
          <View style={styles.divider}></View>
          <Gap height={20} />
        </View>
        <View style={styles.contentData}>
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <Text style={styles.label}>Status Mahasiswa</Text>
                <Gap height={5} />
                <Text style={styles.data}>METOPEN (Metode Penelitian)</Text>
                <Gap height={20} />
              </View>
              <View>
                <Text style={styles.label}>Judul Topik</Text>
                <Gap height={5} />
                <Text style={styles.data}>
                  pengembangan aplikasi mobile e-learning dengan consume api
                  portal uad dan elearning uad
                </Text>
                <Gap height={20} />
              </View>
              <View>
                <Text style={styles.label}>Deskripsi Topik</Text>
                <Gap height={5} />
                <Text style={styles.data}>
                  pengembangan aplikasi mobile e-learning dengan consume api
                  portal uad dan elearning uad
                </Text>
                <Gap height={20} />
              </View>
              <View>
                <Text style={styles.label}>Bidang Topik</Text>
                <Gap height={5} />
                <Text style={styles.data}>Kebutuhan Perangkat Lunak</Text>
                <Gap height={20} />
              </View>
              <View>
                <Text style={styles.label}>Periode</Text>
                <Gap height={5} />
                <Text style={styles.data}>genap 2020 / 2021</Text>
                <Gap height={20} />
              </View>
            </ScrollView>
          </View>
        </View>
        <Gap height={15} />
        <Button label="Lihat Logbook" />
      </View>
    </View>
  );
};

export default DsnDetailBimbingan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  divider: {
    height: 2,
    backgroundColor: colors.blackPrimary,
  },
  contentData: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
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
