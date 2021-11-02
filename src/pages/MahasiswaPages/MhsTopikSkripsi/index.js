import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  IcAjukanTopik,
  IcAmbilTopik,
  IcArrowBack,
  IcHasilAjuan,
  IlFileAjuan,
} from '../../../assets';
import {CardMenu, Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const MhsTopikSkripsi = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Topik Skripsi"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.navigate('MainApp')}
      />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <CardMenu
            iconCard={<IcAjukanTopik />}
            title="Ajukan Topik ke Dosen"
            bgCardColor={colors.primary}
            fontsfamily={fonts.primary[400]}
            fontsize={20}
            lineheight={30}
            onPress={() => navigation.navigate('MhsAjukanTopik')}
          />
          <Gap width={20} />
          <CardMenu
            iconCard={<IcAmbilTopik />}
            title="Ambil Topik dari Dosen"
            bgCardColor={colors.primary}
            fontsfamily={fonts.primary[400]}
            fontsize={20}
            lineheight={30}
            onPress={() => navigation.navigate('MhsTopikDosen')}
          />
        </View>
        <Gap height={20} />
        <View style={styles.bottomContent}>
          <CardMenu
            iconCard={<IcHasilAjuan />}
            title="Hasil Ajuan Topik"
            bgCardColor={colors.primary}
            fontsfamily={fonts.primary[400]}
            fontsize={20}
            lineheight={30}
            onPress={() => navigation.navigate('MhsHasilAjuanTopik')}
          />
        </View>
      </View>
    </View>
  );
};

export default MhsTopikSkripsi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 3,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContent: {
    alignItems: 'flex-end',
  },
});
