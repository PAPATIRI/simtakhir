import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardHasilAjuan = ({titleCard, descCard, dosenName, status}) => {
  return (
    <View style={styles.cardWrapper}>
      <Text style={styles.titleCard}>{titleCard.slice(0, 35)}..</Text>
      <Gap height={5} />
      <Text style={styles.descCard}>{descCard.slice(0, 35)}..</Text>
      <Gap height={17} />
      <View style={styles.botCard}>
        <Text style={styles.dosenName}>{dosenName}</Text>
        <View style={styles.status}>
          <Text style={styles.textStatus}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardHasilAjuan;

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 1,
    marginBottom: 10,
  },
  titleCard: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.accent,
  },
  descCard: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary,
  },
  botCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dosenName: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
  },
  status: {
    backgroundColor: colors.green,
    padding: 5,
    borderRadius: 5,
  },
  textStatus: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.white,
  },
});
