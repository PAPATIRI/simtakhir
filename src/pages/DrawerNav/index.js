import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProfilImg} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts} from '../../utils';

const DrawerNav = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContent}>
        <Image source={ProfilImg} style={styles.profilImg}></Image>
        <Gap height={10} />
        <Text style={styles.nameProfile}>Siska Amelia</Text>
        <Text style={styles.nimProfile}>1700018192</Text>
      </View>
      <View style={styles.bottomContent}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Text style={styles.itemMenu}>Tentang</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Text style={styles.itemMenu}>Profil</Text>
        </TouchableOpacity>
        <Gap height={80} />
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Text style={styles.itemMenu}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.accent,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  topContent: {
    alignItems: 'flex-start',
  },
  bottomContent: {
    flexGrow: 1,
    marginTop: 80,
    alignItems: 'flex-end',
  },
  profilImg: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  nameProfile: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
    lineHeight: 24 * 1.5,
  },
  nimProfile: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.secondary,
    lineHeight: 18 * 1.5,
    marginTop: 5,
  },
  itemMenu: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.primary,
    lineHeight: 18 * 1.5,
  },
});
