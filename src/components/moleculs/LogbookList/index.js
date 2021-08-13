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
          <Text style={styles.titleItem}>{titleLogbook.slice(0, 35)}..</Text>
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
  },
  contentItem: {
    marginRight: 22,
  },
  titleItem: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
  },
  dateItem: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
  },
  iconItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
