import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardMenuDosen = ({
  iconCard,
  title,
  title2,
  bgCardColor,
  onPress,
  fontsize,
  fontsfamily,
  color,
  lineheight,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.cardWrapper(bgCardColor)}>
      <View style={styles.iconWrapper}>{iconCard}</View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title(fontsize, fontsfamily, color, lineheight)}>
          {title}
        </Text>
        <Text style={styles.title(fontsize, fontsfamily, color, lineheight)}>
          {title2}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenuDosen;

const styles = StyleSheet.create({
  cardWrapper: bgCardColor => ({
    backgroundColor: bgCardColor,
    height: 190,
    width: Dimensions.get('window').width * 0.36,
    borderRadius: 8,
    justifyContent: 'space-between',
    elevation: 2,
  }),
  iconWrapper: {
    padding: 15,
  },
  title: (fontsize, fontsfamily, color, lineheight) => ({
    fontFamily: fontsfamily,
    fontSize: fontsize,
    color: color,
    lineHeight: lineheight,
  }),
  titleWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 25,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
