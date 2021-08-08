import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardMenu = ({iconCard, title, bgCardColor}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.cardWrapper(bgCardColor)}>
        <View style={styles.iconWrapper}>{iconCard}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  cardWrapper: bgCardColor => ({
    backgroundColor: bgCardColor,
    height: 190,
    width: 150,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    elevation: 2,
  }),
  iconWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 60,
    padding: 5,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.white,
  },
});
