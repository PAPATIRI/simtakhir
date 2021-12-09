import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IcArrowBack, IcPendadaran, IcSempro} from '../../../assets';
import {CardMenu, TopNavbar} from '../../../components';
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
            title="Daftar"
            title2="Sempro"
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
            title="Daftar"
            title2="Pendadaran"
            bgCardColor={colors.primary}
            fontsfamily={fonts.primary[400]}
            fontsize={20}
            lineheight={30}
            onPress={() => {
              navigation.navigate('MhsDaftarPendadaran');
            }}
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
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
