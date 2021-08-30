import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardMenuDosen = ({
  iconCard,
  title,
  bgCardColor,
  onPress,
  fontsize,
  fontsfamily,
  color,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.cardWrapper(bgCardColor)}>
        <View style={styles.iconWrapper}>{iconCard}</View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title(fontsize, fontsfamily, color)}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenuDosen;

const styles = StyleSheet.create({
  cardWrapper: bgCardColor => ({
    backgroundColor: bgCardColor,
    height: 190,
    width: 150,
    borderRadius: 10,
    justifyContent: 'space-between',
    elevation: 2,
  }),
  iconWrapper: {
    padding: 15,
  },
  title: (fontsize, fontsfamily, color) => ({
    fontFamily: fontsfamily,
    fontSize: fontsize,
    color: color,
  }),
  titleWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 25,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
