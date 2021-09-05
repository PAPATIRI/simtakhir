import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {TopNavbar, Gap, Button, ButtonDangerSedond} from '../../../components';
import {colors, fonts} from '../../../utils';

const MhsDetailAjuanTopik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Konfirmasi Data Topik"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.navigate('DsnRequestMhs')}
      />
      <View style={styles.content}>
        <View style={styles.dataDetail}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.labelData}>Judul Topik</Text>
              <Text style={styles.descData}>
                pengembangan aplikasi mobile e-learning dengan consume api
                portal uad dan elearning uad
              </Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Deskripsi Topik</Text>
              <Text style={styles.descData}>
                pengembangan aplikasi mobile e-learning dengan consume api
                portal uad dan elearning uad
              </Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Bidang Topik</Text>
              <Text style={styles.descData}>Kebutuhan Perangkat Lunak</Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Dosen Pembimbing</Text>
              <Text style={styles.descData}>Ardiansyah, S.T.,M.Cs.</Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.labelData}>Periode</Text>
              <Text style={styles.descData}>genap 2020 / 2021</Text>
            </View>
          </ScrollView>
          <Gap height={10} />
          <Button
            label="Konfirmasi & ajukan"
            onPress={() => {
              navigation.navigate('MhsSuksesAjukanTopik');
            }}
          />
          <Gap height={10} />
          <ButtonDangerSedond type="secondary" label="batal" />
        </View>
      </View>
    </View>
  );
};

export default MhsDetailAjuanTopik;

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
    padding: 20,
  },
  labelTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  dataDetail: {
    flex: 1,
    justifyContent: 'space-between',
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
