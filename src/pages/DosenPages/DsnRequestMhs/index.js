import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IcArrowBack, Mhs1} from '../../../assets';
import {CardTopikAjuan, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const DsnRequestMhs = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Topik Ajuan Mahasiswa"
        onPress={() => navigation.navigate('DsnTopikSkripsi')}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardTopikAjuan
            imageCard={Mhs1}
            titleCard="pengembangan aplikasi mobile sistem Elearnig dengan mengkonsumsi API portal UAD"
            name="m andika risky"
            periode="genap 2020 / 2021"
            status="menunggu"
            onPress={() => navigation.navigate('DsnDetailRequestMhs')}
          />
          <CardTopikAjuan
            imageCard={Mhs1}
            titleCard="pengembangan aplikasi mobile sistem Elearnig dengan mengkonsumsi API portal UAD"
            name="m andika risky"
            periode="genap 2020 / 2021"
            status="menunggu"
          />
          <CardTopikAjuan
            imageCard={Mhs1}
            titleCard="pengembangan aplikasi mobile sistem Elearnig dengan mengkonsumsi API portal UAD"
            name="m andika risky"
            periode="genap 2020 / 2021"
            status="menunggu"
          />
          <CardTopikAjuan
            imageCard={Mhs1}
            titleCard="pengembangan aplikasi mobile sistem Elearnig dengan mengkonsumsi API portal UAD"
            name="m andika risky"
            periode="genap 2020 / 2021"
            status="menunggu"
          />
          <CardTopikAjuan
            imageCard={Mhs1}
            titleCard="pengembangan aplikasi mobile sistem Elearnig dengan mengkonsumsi API portal UAD"
            name="m andika risky"
            periode="genap 2020 / 2021"
            status="menunggu"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default DsnRequestMhs;

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
