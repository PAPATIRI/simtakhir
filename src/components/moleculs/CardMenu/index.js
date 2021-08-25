import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardMenu = ({
  iconCard,
  title,
  bgCardColor,
  onPress,
  fontsize,
  fontsfamily,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.cardWrapper(bgCardColor)}>
        <View style={styles.iconWrapper}>{iconCard}</View>
        <Text style={styles.title(fontsize, fontsfamily)}>{title}</Text>
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
  title: (fontsize, fontsfamily) => ({
    fontFamily: fontsfamily,
    fontSize: fontsize,
    color: colors.text.white,
  }),
});
