import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IcArrowBack} from '../../../assets';
import {CardMhsBimbingan, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const DsnBimbingan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Mahasiswa Bimbingan"
        onPress={() => {
          navigation.navigate('DosenMainApp');
        }}
      />
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
          <CardMhsBimbingan
            nama="Siska Amelia"
            status="Metopen"
            periode="genap 2020 / 2021"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default DsnBimbingan;

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
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
