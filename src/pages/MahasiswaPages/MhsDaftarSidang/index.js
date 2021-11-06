import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IcArrowBack,
  IcPendadaran,
  IcSempro,
  IlPendadaran,
  IlSempro,
} from '../../../assets';
import {CardMenu, Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const MhsDaftarSidang = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Daftar Sidang"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <CardMenu
            iconCard={<IcSempro />}
            title="Daftar Sempro"
            bgCardColor={colors.primary}
            fontsfamily={fonts.primary[400]}
            fontsize={20}
            lineheight={30}
            onPress={() => {
              navigation.navigate('MhsDaftarSidangSempro');
            }}
          />
          <CardMenu
            iconCard={<IcPendadaran />}
            title="Daftar Pendadaran"
            bgCardColor={colors.primary}
            fontsfamily={fonts.primary[400]}
            fontsize={20}
            lineheight={30}
          />
        </View>
      </View>
    </View>
  );
};

export default MhsDaftarSidang;

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
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
