import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {
  CardTopikSkripsiDsn,
  Gap,
  TopNavbar,
  TopNavbarSearch,
} from '../../../components';
import {colors} from '../../../utils';

const DsnTopikSkripsiSaya = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbarSearch
        onPress={() => {
          navigation.navigate('DsnTopikSkripsi');
        }}
      />
      <View style={styles.content}>
        <Text>daftar penawaran topik anda</Text>
        <Gap height={10} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollist}>
          <CardTopikSkripsiDsn
            color={colors.text.accent}
            title="Refaktor dan Pengembangan Test Suite Otomatis"
            bidang="Kebutuhan Perangkat Lunak"
            tanggal="21 september 2021"
            pendaftar={2}
            status="open"
          />
          <CardTopikSkripsiDsn
            color={colors.text.danger}
            title="Refaktor dan Pengembangan Test Suite Otomatis"
            bidang="Kebutuhan Perangkat Lunak"
            tanggal="21 september 2021"
            pendaftar={1}
            status="closed"
          />
          <CardTopikSkripsiDsn
            color={colors.text.accent}
            title="Refaktor dan Pengembangan Test Suite Otomatis"
            bidang="Kebutuhan Perangkat Lunak"
            tanggal="21 september 2021"
            pendaftar={5}
            status="open"
          />
          <CardTopikSkripsiDsn
            color={colors.text.accent}
            title="Refaktor dan Pengembangan Test Suite Otomatis"
            bidang="Kebutuhan Perangkat Lunak"
            tanggal="21 september 2021"
            pendaftar={5}
            status="open"
          />
          <CardTopikSkripsiDsn
            color={colors.text.accent}
            title="Refaktor dan Pengembangan Test Suite Otomatis"
            bidang="Kebutuhan Perangkat Lunak"
            tanggal="21 september 2021"
            pendaftar={5}
            status="open"
          />
          <CardTopikSkripsiDsn
            color={colors.text.accent}
            title="Refaktor dan Pengembangan Test Suite Otomatis"
            bidang="Kebutuhan Perangkat Lunak"
            tanggal="21 september 2021"
            pendaftar={5}
            status="open"
          />
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
    paddingHorizontal: 5,
  },

  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
