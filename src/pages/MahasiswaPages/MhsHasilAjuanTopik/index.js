import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {TopNavbar} from '../../../components';
import CardHasilAjuan from '../../../components/moleculs/CardHasilAjuan';
import {colors} from '../../../utils';

const MhsHasilAjuanTopik = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Ajuan Topik Anda"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.navigate('MhsTopikSkripsi')}
      />
      <View style={styles.content}>
        <CardHasilAjuan
          titleCard="pengembangan aplikasi mobile sistem manajemen tugas akhir web"
          descCard="topik ini berfokus pada pengembangan aplikasi mible yaitu android"
          dosenName="Ardiansyah S.T., M.Cs"
          status="accepted"
        />

        <CardHasilAjuan
          titleCard="pengembangan aplikasi mobile sistem manajemen tugas akhir web"
          descCard="topik ini berfokus pada pengembangan aplikasi mible yaitu android"
          dosenName="Ardiansyah S.T., M.Cs"
          status="accepted"
        />

        <CardHasilAjuan
          titleCard="pengembangan aplikasi mobile sistem manajemen tugas akhir web"
          descCard="topik ini berfokus pada pengembangan aplikasi mible yaitu android"
          dosenName="Ardiansyah S.T., M.Cs"
          status="accepted"
        />
      </View>
    </View>
  );
};

export default MhsHasilAjuanTopik;

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
});
