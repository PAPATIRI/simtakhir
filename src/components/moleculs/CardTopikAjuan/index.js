import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardTopikAjuan = ({titleCard, name, periode, status, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.cardWrapper}
      onPress={onPress}>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.titleCard} numberOfLines={2}>
            {titleCard}
          </Text>
          <Gap height={5} />
          <Text style={styles.dataText}>{name}</Text>
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.dataText}>{periode}</Text>
          <Text style={styles.stylestatus(status)}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardTopikAjuan;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    height: 150,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleCard: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.blue,
    lineHeight: 16 * 1.5,
    textTransform: 'capitalize',
  },
  dataText: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
    lineHeight: 14 * 1.5,
    textTransform: 'capitalize',
  },
  stylestatus: status => ({
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: status == 'ditolak' ? colors.text.danger : colors.text.primary,
    lineHeight: 14 * 1.5,
    textTransform: 'lowercase',
  }),
});
