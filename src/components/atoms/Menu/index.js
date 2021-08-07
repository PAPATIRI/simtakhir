import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const Menu = ({icon, menuName, color, border, padding, onPress}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.iconMenu(color, border, padding)}>{icon}</View>
        <Gap height={5} />
      </TouchableOpacity>
      <Text style={styles.iconName}>{menuName}</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  body: {},
  iconMenu: (color, border, padding) => ({
    padding: padding,
    borderRadius: border,
    backgroundColor: color,
  }),
  iconName: {
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    fontSize: 12,
    color: colors.text.secondary,
  },
});
