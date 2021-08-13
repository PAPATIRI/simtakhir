import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcArrowDown, IcHamburgerMenu} from '../../../assets';
import {TopNavbar, CardProfile, Gap} from '../../../components';
import {colors, fonts} from '../../../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.topNavWrapper}>
        <TopNavbar iconRight={<IcHamburgerMenu />} />
        <View style={styles.emptyView}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile />
        </View>
        <View style={styles.menuList}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.cardContent}>
              <Text style={styles.textContent}>Detail Tugas Akhir</Text>
              <IcArrowDown />
            </View>
          </TouchableOpacity>
          <Gap height={10} />
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.cardContent}>
              <Text style={styles.textContent}>Jadwal Sidang</Text>
              <IcArrowDown />
            </View>
          </TouchableOpacity>
          <Gap height={10} />
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.cardContent}>
              <Text style={styles.textContent}>Logbook</Text>
              <IcArrowDown />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

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
  },
  cardWrapper: {
    marginTop: -75,
    flex: 1,
    paddingHorizontal: 20,
  },
  topNavWrapper: {
    flex: 1,
  },
  emptyView: {
    flex: 1,
  },
  menuList: {
    flex: 2,
    paddingHorizontal: 20,
  },
  cardContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    elevation: 1,
  },
  textContent: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.accent,
  },
});
