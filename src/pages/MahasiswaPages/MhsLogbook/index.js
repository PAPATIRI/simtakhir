import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IcAcceptedLogbook,
  IcArrowBack,
  IcDownload,
  IcDropDown,
  IcPlus,
  IcWaitingLogbook,
} from '../../../assets';
import {Gap, LogbookList, TopNavbar} from '../../../components';
import {colors} from '../../../utils';
import ActionButton from '@logvinme/react-native-action-button';
import {useDispatch, useSelector} from 'react-redux';
import {getLogbookData} from '../../../redux/action';

const MhsLogbook = ({navigation}) => {
  const dispatch = useDispatch();
  const {logbook} = useSelector(state => state.logbookReducer);

  useEffect(() => {
    dispatch(getLogbookData());
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Logbook"
        onPress={() => navigation.navigate('MainApp')}
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
          {logbook.map(itemLogbook => {
            return (
              <LogbookList
                titleLogbook={itemLogbook.kegiatan}
                key={itemLogbook.kegiatan}
                dateLogbook={new Date(itemLogbook.updated_at).toDateString()}
                iconStatus={
                  itemLogbook.status == 'menunggu' ? (
                    <IcWaitingLogbook />
                  ) : (
                    <IcAcceptedLogbook />
                  )
                }
                onPress={() =>
                  navigation.navigate('MhsDetailLogbook', itemLogbook)
                }
              />
            );
          })}
        </View>
        <ActionButton buttonColor={colors.accent}>
          <ActionButton.Item
            onPress={() => {}}
            title="download logbook"
            textStyle={{
              color: colors.text.accent,
            }}>
            <IcDownload />
          </ActionButton.Item>
          <ActionButton.Item
            onPress={() => navigation.navigate('MhsTambahLogbook')}
            title="tambah logbook"
            textStyle={{color: colors.text.accent}}>
            <IcPlus style={styles.icon} />
          </ActionButton.Item>
        </ActionButton>
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
