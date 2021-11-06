import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IcArrowBack} from '../../../assets';
import {CardMhsBimbingan, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const DsnBimbingan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Mahasiswa Bimbingan"
        onPress={() => {
          navigation.navigate('DsnDrawer');
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>daftar mahasiswa bimbingan</Text>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <CardMhsBimbingan
            nama="Siska "
            status="Metopen"
            periode="genap 2020 / 2021"
            onPress={() => navigation.navigate('DsnDetailBimbingan')}
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
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
    marginBottom: 5,
  },
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
