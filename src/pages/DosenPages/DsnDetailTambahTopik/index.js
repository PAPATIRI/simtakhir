import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, ButtonDangerSedond, Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const DsnDetailTambahTopik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Konfirmasi Data Topik"
        onPress={() => {
          navigation.navigate('DsnTambahTopik');
        }}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.labelData}>Judul Topik</Text>
            <Gap height={5} />
            <Text style={styles.descData}>
              sistem informasi data organisasi berbasis web
            </Text>
            <Gap height={20} />
          </View>
          <View>
            <Text style={styles.labelData}>Deskripsi Topik</Text>
            <Gap height={5} />
            <Text style={styles.descData}>
              tugas akhir ini merupakan pembangunan sistem berbasis web untuk
              data organisasi dengan menggunakan framework Laravel
            </Text>
            <Gap height={20} />
          </View>
          <View>
            <Text style={styles.labelData}>Bidang Topik</Text>
            <Gap height={5} />
            <Text style={styles.descData}>Sistem Informasi</Text>
            <Gap height={20} />
          </View>
          <View>
            <Text style={styles.labelData}>Periode</Text>
            <Gap height={5} />
            <Text style={styles.descData}>2020 / 2021</Text>
            <Gap height={20} />
          </View>
        </ScrollView>
        <Gap height={15} />
        <View>
          <Button
            label="Konfirmasi & Kirim"
            onPress={() => navigation.navigate('DsnSuksesTambahTopik')}
          />
          <Gap height={10} />
          <ButtonDangerSedond
            type="secondary"
            label="batal"
            onPress={() => navigation.navigate('DsnTopikSkripsi')}
          />
        </View>
      </View>
    </View>
  );
};

export default DsnDetailTambahTopik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  labelData: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  descData: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
});
