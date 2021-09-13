import React from 'react';
import {ActivityIndicator, Text, StyleSheet, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color={colors.accent} />
        <Text style={styles.loadingText}>loading...</Text>
      </View>
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
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  loadingWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 50,
    borderRadius: 20,
  },
  loadingText: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    lineHeight: 18 * 1.5,
    color: colors.text.white,
  },
});
