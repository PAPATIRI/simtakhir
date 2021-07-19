import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IcHomeOff,
  IcHomeOn,
  IcNotifOff,
  IcNotifOn,
  IcUserOff,
  IcUserOn,
} from '../../../assets';
import {colors} from '../../../utils';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Notification':
      return focus ? (
        <View style={styles.bgBtnIcon}>
          <IcNotifOn />
        </View>
      ) : (
        <IcNotifOff />
      );
    //
    case 'Home':
      return focus ? (
        <View style={styles.bgBtnIcon}>
          <IcHomeOn />
        </View>
      ) : (
        <IcHomeOff />
      );
    //
    case 'Profile':
      return focus ? (
        <View style={styles.bgBtnIcon}>
          <IcUserOn />
        </View>
      ) : (
        <IcUserOff />
      );
    //
    default:
      return <IcHomeOn />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  bgBtnIcon: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
});
