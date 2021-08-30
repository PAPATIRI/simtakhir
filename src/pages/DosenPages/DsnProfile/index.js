import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArdiansyahImg, IcHamburgerMenu} from '../../../assets';
import {TopNavbar, CardProfile} from '../../../components';
import {colors} from '../../../utils';

const DsnProfile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.topNavWrapper}>
        <TopNavbar iconRight={<IcHamburgerMenu />} />
        <View style={styles.emptyView}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile
            image={ArdiansyahImg}
            name="Ardiansyah S.T.,M.Cs"
            label1="total topik"
            data1="10 topik"
            label2="total mahasiswa bimbingan"
            data2="10 Mahasiswa"
          />
        </View>
        <View style={styles.menuList}>
          <Text>text content</Text>
        </View>
      </View>
    </View>
  );
};

export default DsnProfile;

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
});
