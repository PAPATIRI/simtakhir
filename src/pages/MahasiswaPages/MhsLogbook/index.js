import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IcAcceptedLogbook,
  IcArrowBack,
  IcDropDown,
  IcWaitingLogbook,
} from '../../../assets';
import {Gap, LogbookList, TopNavbar} from '../../../components';
import {colors} from '../../../utils';

const MhsLogbook = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Logbook"
        onPress={() => navigation.navigate('MhsHome')}
      />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.filter}>
              <Text style={styles.filterText}>status</Text>
              <IcDropDown />
            </View>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View style={styles.bottomContent}>
          <LogbookList
            titleLogbook="bimbingan mengenai judul tugas akhir yang akan diambil"
            dateLogbook="2 desember 2021"
            iconStatus={<IcAcceptedLogbook />}
          />

          <LogbookList
            titleLogbook="bimbingan mengenai judul tugas akhir yang akan diambil"
            dateLogbook="2 desember 2021"
            iconStatus={<IcAcceptedLogbook />}
          />

          <LogbookList
            titleLogbook="bimbingan mengenai judul tugas akhir yang akan diambil"
            dateLogbook="2 desember 2021"
            iconStatus={<IcAcceptedLogbook />}
          />

          <LogbookList
            titleLogbook="bimbingan mengenai judul tugas akhir yang akan diambil"
            dateLogbook="2 desember 2021"
            iconStatus={<IcAcceptedLogbook />}
          />

          <LogbookList
            titleLogbook="bimbingan mengenai judul tugas akhir yang akan diambil"
            dateLogbook="2 desember 2021"
            iconStatus={<IcWaitingLogbook />}
          />

          <LogbookList
            titleLogbook="bimbingan mengenai judul tugas akhir yang akan diambil"
            dateLogbook="2 desember 2021"
            iconStatus={<IcWaitingLogbook />}
          />
        </View>
      </View>
    </View>
  );
};

export default MhsLogbook;

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
  topContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bottomContent: {
    flex: 1,
  },
  filter: {
    width: 90,
    height: 30,
    backgroundColor: colors.blackSecondary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  filterText: {
    color: colors.text.white,
  },
});
