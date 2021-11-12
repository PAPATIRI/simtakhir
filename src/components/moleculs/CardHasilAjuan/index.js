import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardHasilAjuan = ({titleCard, descCard, dosenName, status, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.cardWrapper}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.titleCard}>{titleCard.slice(0, 35)}..</Text>
      <Gap height={5} />
      <Text style={styles.descCard}>{descCard.slice(0, 35)}..</Text>
      <Gap height={17} />
      <View style={styles.botCard}>
        <Text style={styles.dosenName}>{dosenName}</Text>
        <View style={styles.status(status)}>
          <Text style={styles.textStatus}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardHasilAjuan;

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  titleCard: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    textTransform: 'capitalize',
    color: colors.text.blue,
  },
  descCard: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.secondary,
  },
  botCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dosenName: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
  status: status => ({
    backgroundColor: status == 'ditolak' ? colors.error : colors.secondary,
    paddingVertical: 5,
    width: 85,
    paddingHorizontal: 8,
    borderRadius: 5,
  }),
  textStatus: {
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.white,
  },
});
