import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcHamburgerMenu} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TopNavbar = ({titleBar, iconLeft, iconRight, onPress}) => {
  return (
    <View style={styles.topNavContent}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.iconLeft}
        onPress={onPress}>
        {iconLeft}
      </TouchableOpacity>
      <View style={styles.descTopNav}>
        <Text style={styles.titleBar}>{titleBar}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.iconRight}
        onPress={onPress}>
        {iconRight}
      </TouchableOpacity>
    </View>
  );
};

export default TopNavbar;

const styles = StyleSheet.create({
  iconLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
    justifyContent: 'center',
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
