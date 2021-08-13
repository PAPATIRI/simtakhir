import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const MhsDetailLogbook = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Detail Logbook"
        onPress={() => navigation.navigate('MhsLogbook')}
      />
      <View style={styles.content}>
        <View style={styles.date}>
          <Text style={styles.dateText}>12 desember 2020</Text>
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.judulTopik}>Kegiatan</Text>
          <Gap height={5} />
          <Text style={styles.descTopik}>
            bimbingan mengenai judul tugas akhir
          </Text>
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.judulTopik}>Catatan Kemajuan</Text>
          <Gap height={5} />
          <Text style={styles.descTopik}>
            mendapatkan pandangan mengenai ruang lingkup topik tugas akhir yang
            diambil, dan dapat memutuskan mengenai teknologi apa yang akan
            digunakan pada tugas akhir
          </Text>
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.judulTopik}>File Tambahan</Text>
          <Gap height={5} />
          <Text style={styles.descTopik}>-</Text>
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.judulTopik}>Paraf Dosen Pembimbing</Text>
          <Gap height={5} />
          <View style={styles.paraf}>
            <Text style={styles.parafText}>terverifikasi</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MhsDetailLogbook;

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
  date: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dateText: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.accent,
  },
  judulTopik: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
  },
  descTopik: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
  },
  paraf: {
    width: '50%',
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 5,
  },
  parafText: {
    color: colors.text.white,
    fontFamily: fonts.primary[400],
    fontSize: 16,
    textAlign: 'center',
  },
});
