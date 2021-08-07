import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  IcAnnouncement,
  IcArrowBack,
  IcEdit,
  IcHamburgerMenu,
  IcTopikFile,
} from '../../../assets';
import {CardMenu, Gap, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const MhsTopikSkripsi = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        titleBar="Topik Skripsi"
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.navigate('MhsHome')}
      />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <CardMenu
            iconCard={<IcEdit />}
            title="Ajukan Topik ke Dosen"
            bgCardColor={colors.pink}
          />
          <Gap width={20} />
          <CardMenu
            iconCard={<IcTopikFile />}
            title="Ambil Topik dari Dosen"
            bgCardColor={colors.green}
          />
        </View>
        <Gap height={20} />
        <View style={styles.bottomContent}>
          <CardMenu
            iconCard={<IcAnnouncement />}
            title="Hasil Ajuan Topikmu"
            bgCardColor={colors.choco}
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
    padding: 40,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomContent: {
    alignItems: 'flex-end',
  },
});
