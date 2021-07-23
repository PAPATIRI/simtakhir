import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcHamburgerMenu} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TopNavbar = ({titleBar}) => {
  return (
    <View style={styles.topNavContent}>
      <View style={styles.iconLeft}>{/* <IcHamburgerMenu /> */}</View>
      <View style={styles.descTopNav}>
        <Text style={styles.titleBar}>{titleBar}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.iconRight}>
        <IcHamburgerMenu />
      </TouchableOpacity>
    </View>
  );
};

export default TopNavbar;

const styles = StyleSheet.create({
  iconLeft: {
    flex: 1,
    backgroundColor: 'orange',
  },
  descTopNav: {
    flex: 4,
    alignItems: 'center',
  },
  titleBar: {
    fontFamily: fonts.primary[400],
    fontSize: 20,
    color: colors.text.white,
  },
  iconRight: {
    flex: 1,
    alignItems: 'flex-end',
    paddingVertical: 8,
    height: 56,
  },
  topNavContent: {
    height: 56,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
