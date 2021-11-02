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
  lineheight,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.cardWrapper(bgCardColor)}>
        <View style={styles.iconWrapper}>{iconCard}</View>
        <Text style={styles.title(fontsize, fontsfamily, lineheight)}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  cardWrapper: bgCardColor => ({
    backgroundColor: bgCardColor,
    height: 200,
    width: 145,
    borderRadius: 8,
    padding: 12,
    justifyContent: 'space-between',
    elevation: 3,
  }),
  title: (fontsize, fontsfamily, lineheight) => ({
    fontFamily: fontsfamily,
    fontSize: fontsize,
    color: colors.text.primary,
    lineHeight: lineheight,
  }),
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.icon.primary.iconBlue,
    height: 80,
    width: 80,
    borderRadius: 100,
  },
});
