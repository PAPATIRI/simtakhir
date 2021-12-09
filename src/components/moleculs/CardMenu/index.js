import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../../../utils';

const CardMenu = ({
  iconCard,
  title,
  bgCardColor,
  onPress,
  fontsize,
  fontsfamily,
  lineheight,
  title2,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.cardWrapper(bgCardColor)}>
        <View style={styles.iconWrapper}>{iconCard}</View>
        <View>
          <Text style={styles.title(fontsize, fontsfamily, lineheight)}>
            {title}
          </Text>
          <Text style={styles.title(fontsize, fontsfamily, lineheight)}>
            {title2}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  cardWrapper: bgCardColor => ({
    backgroundColor: bgCardColor,
    height: Dimensions.get('window').height * 0.29,
    width: Dimensions.get('window').width * 0.38,
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
