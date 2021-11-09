import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, ButtonDangerSedond, Gap, TopNavbar} from '../../../components';
import {IcArrowBack} from '../../../assets';

const DsnDetailTopikSaya = ({navigation, route}) => {
  const {
    judultopik,
    bidangtopik,
    deskripsitopik,
    periode,
    mahasiswa,
    penguji1,
    penguji2,
  } = route.params;

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Detail Penawaran Topik"
        onPress={() => {
          navigation.navigate('DsnTopikSkripsiSaya');
        }}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Text style={styles.label}>Pendaftar Topik</Text>
            <Text style={styles.data}>0 Mahasiswa</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('DsnPendaftarTopikSaya');
            }}>
            <View style={styles.btnHeader}>
              <Text style={styles.textBtnHeader}>lihat pendaftar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View style={styles.detailData}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.labelData}>Judul</Text>
              <Gap height={5} />
              <Text style={styles.descData}>{judultopik}</Text>
              <Gap height={16} />
            </View>
            <View>
              <Text style={styles.labelData}>deskripsi topik</Text>
              <Gap height={5} />
              <Text style={styles.descData}>{deskripsitopik}</Text>
              <Gap height={16} />
            </View>
            <View style={styles.dataDouble}>
              <View style={styles.dataDoubleLeft}>
                <Text style={styles.labelData}>Bidang Topik</Text>
                <Gap height={5} />
                <Text style={styles.descData}>{bidangtopik}</Text>
                <Gap height={16} />
              </View>
              <View style={styles.dataDoubleRight}>
                <Text style={styles.labelData}>Periode</Text>
                <Gap height={5} />
                <Text style={styles.descData}>{periode}</Text>
                <Gap height={16} />
              </View>
            </View>
            <View style={styles.dataDouble}>
              <View style={styles.dataDoubleLeft}>
                <Text style={styles.labelData}>Mahasiswa Terpilih</Text>
                <Gap height={5} />
                <Text style={styles.descData}>
                  {mahasiswa ? mahasiswa : 'belum ada'}
                </Text>
                <Gap height={16} />
              </View>
              <View style={styles.dataDoubleRight}>
                <Text style={styles.labelData}>Penguji 1 & 2</Text>
                <Gap height={5} />
                <Text style={styles.descData}>
                  {
                    (penguji1 && penguji2
                      ? `${penguji1} ${penguji2}`
                      : 'belum ada',
                    penguji2 ? penguji2 : 'belum ada')
                  }
                </Text>
                <Gap height={16} />
              </View>
            </View>
          </ScrollView>
          <View>
            <Button
              label="Edit Topik"
              onPress={() => navigation.navigate('DsnSuksesEditTopik')}
            />
            <Gap height={10} />
            <ButtonDangerSedond label="Hapus Topik" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DsnDetailTopikSaya;

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.secondary,
    lineHeight: 16 * 1.5,
  },
  data: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.secondary,
    lineHeight: 16 * 1.5,
  },
  btnHeader: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textBtnHeader: {
    color: colors.text.white,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    lineHeight: 16 * 1.5,
  },
  detailData: {
    flex: 1,
    justifyContent: 'space-between',
  },
  labelData: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textTransform: 'capitalize',
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  descData: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  dataDouble: {
    flexDirection: 'row',
  },
  dataDoubleLeft: {
    flex: 1,
  },
  dataDoubleRight: {
    flex: 1,
  },
});
