import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const MhsAjukanTopikNext = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Ajukan Topik"
        onPress={() => navigation.navigate('MhsAjukanTopik')}
      />
      <View style={styles.content}>
        <Text>ajukan topik next page</Text>
      </View>
    </View>
  );
};

export default MhsAjukanTopikNext;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
