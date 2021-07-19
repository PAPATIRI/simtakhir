import React from 'react';
import {
  ColorPropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IcCalender,
  IcHamburgerMenu,
  IcLogBook,
  IcTopikSkripsi,
} from '../../assets';
import {colors} from '../../utils';
import {CardProfile, Gap, Menu} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.topNav}>
        <TouchableOpacity activeOpacity={0.7}>
          <IcHamburgerMenu />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile />
        </View>
        <View style={styles.menuWrapper}>
          <Menu
            menuName="jadwal sidang"
            icon={<IcCalender />}
            color={colors.icon.primary.iconPink}
            border={10}
            padding={10}
          />
          <Menu
            menuName="logbook"
            icon={<IcLogBook />}
            color={colors.icon.primary.iconGreen}
            border={10}
            padding={10}
          />
          <Menu
            menuName="topik skripsi"
            icon={<IcTopikSkripsi />}
            color={colors.icon.primary.iconChoco}
            border={10}
            padding={10}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  topNav: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    paddingVertical: 8,
    height: 56,
  },
  content: {
    flex: 3,
    backgroundColor: colors.primary,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  cardWrapper: {
    marginTop: -75,
    flex: 1,
    paddingHorizontal: 20,
  },
  menuWrapper: {
    flex: 2,
    paddingVertical: 40,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
