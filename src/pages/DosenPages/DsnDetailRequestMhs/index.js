import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {TopNavbar, Gap, Button, ButtonDangerSedond} from '../../../components';
import {colors, fonts} from '../../../utils';

const DsnDetailRequestMhs = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Detail Topik Ajuan"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.navigate('DsnRequestMhs')}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.labelTitle}>Pengaju Topik</Text>
          <Gap height={5} />
          <View style={styles.botHeader}>
            <Text style={styles.nameDate}>M Andika Risky</Text>
            <Text style={styles.nameDate}>12 desember 2021</Text>
          </View>
          <Gap height={15} />
        </View>
        <View style={styles.divider}></View>
        <Gap height={30} />
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
          </ScrollView>
          <Gap height={10} />
          <Button
            label="Terima Ajuan"
            onPress={() => {
              navigation.navigate('DsnSuksesTerimaAjuan');
            }}
          />
          <Gap height={10} />
          <ButtonDangerSedond label="Tolak Ajuan" />
        </View>
      </View>
    </View>
  );
};

export default DsnDetailRequestMhs;

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
  botHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameDate: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  divider: {
    backgroundColor: colors.blackPrimary,
    height: 2,
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
