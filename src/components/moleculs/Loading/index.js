import React from 'react';
import {ActivityIndicator, Text, StyleSheet, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.accent} />
      <Text style={styles.loadingText}>loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
  },
  loadingText: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    lineHeight: 18 * 1.5,
    color: colors.text.white,
  },
});
