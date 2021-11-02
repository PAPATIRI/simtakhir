import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const Menu = ({icon, menuName, color, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.iconMenu(color)}
        activeOpacity={0.7}
        onPress={onPress}>
        <View>{icon}</View>
      </TouchableOpacity>
      <Gap height={5} />
      <Text style={styles.iconName}>{menuName}</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  iconMenu: color => ({
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: color,
    height: 80,
    width: 80,
  }),
  iconName: {
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    fontSize: 14,
    color: colors.text.secondary,
  },
});
