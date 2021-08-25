import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack, IlPendadaran, IlSempro} from '../../../assets';
import {CardMenu, Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const MhsDaftarSidang = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Daftar Sidang"
        onPress={() => navigation.navigate('MainApp')}
      />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <CardMenu
            iconCard={<IlSempro />}
            title="Daftar Seminar Proposal"
            bgCardColor={colors.pink}
            fontsfamily={fonts.primary[600]}
            fontsize={18}
            onPress={() => {
              navigation.navigate('MhsDaftarSidangSempro');
            }}
          />
          <Gap width={20} />
          <CardMenu
            iconCard={<IlPendadaran />}
            title="Daftar Sidang Skripsi"
            bgCardColor={colors.blue2}
            fontsfamily={fonts.primary[600]}
            fontsize={18}
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
    padding: 20,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
