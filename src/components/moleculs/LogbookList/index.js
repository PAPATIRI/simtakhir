import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcArrowRightGreen} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const LogbookList = ({iconStatus, titleLogbook, dateLogbook, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.logbookWrapper}>
        <View style={styles.contentItem}>
          <Text numberOfLines={1} style={styles.titleItem}>
            {titleLogbook}..
          </Text>
          <Gap height={5} />
          <Text style={styles.dateItem}>{dateLogbook}</Text>
        </View>
        <View style={styles.iconItem}>
          {iconStatus}
          <IcArrowRightGreen />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LogbookList;

const styles = StyleSheet.create({
  logbookWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 4,
    borderRadius: 4,
    borderBottomWidth: 2,
    borderBottomColor: colors.blackDisabled,
  },
  contentItem: {
    flex: 4,
    marginRight: 22,
  },
  titleItem: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
  dateItem: {
    fontFamily: fonts.primary[400],
    lineHeight: 16 * 1.5,
    fontSize: 14,
    color: colors.text.secondary,
  },
  iconItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
