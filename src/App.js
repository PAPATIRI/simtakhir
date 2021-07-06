import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from './utils';

const App = () => {
  return (
    <View>
      <Text style={styles.text}>hello react</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: fonts.primary[400],
  },
});
export default App;
