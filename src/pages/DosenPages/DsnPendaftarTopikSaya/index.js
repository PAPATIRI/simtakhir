import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack, ProfilImg} from '../../../assets';
import {CardPendaftarTopik, Gap, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const DsnPendaftarTopikSaya = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Pendaftar Topik Anda"
        onPress={() => navigation.navigate('DsnDetailTopikSaya')}
      />
      <View style={styles.content}>
        <CardPendaftarTopik
          nameCard="Siska Amelia"
          nim="1700018192"
          imageCard={ProfilImg}
          onPress={() => navigation.navigate('DsnSuksesTerimaPendaftar')}
        />
        <Gap height={10} />
        <CardPendaftarTopik
          nameCard="Siska Amelia"
          nim="1700018192"
          imageCard={ProfilImg}
        />
      </View>
    </View>
  );
};

export default DsnPendaftarTopikSaya;

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
});
