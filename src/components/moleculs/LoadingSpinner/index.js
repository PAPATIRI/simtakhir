import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../..';
import {colors, fonts} from '../../../utils';

const LoadingSpinner = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator size="large" color={colors.accent} />
      <Gap height={5} />
      <Text style={styles.textLoading}>loading...</Text>
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  loadingWrapper: {
    alignItems: 'center',
  },
  textLoading: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
});
