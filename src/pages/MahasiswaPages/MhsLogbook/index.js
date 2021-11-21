import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IcAcceptedLogbook,
  IcArrowBack,
  IcDownload,
  IcDropDown,
  IcPlus,
  IcWaitingLogbook,
} from '../../../assets';
import {Gap, LoadingSpinner, LogbookList, TopNavbar} from '../../../components';
import {colors} from '../../../utils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ActionButton from 'react-native-simple-action-button';
import ActionButton from 'react-native-action-button';

const MhsLogbook = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataLogbook, setDataLogbook] = useState([]);
  const [idMhs, setIdMhs] = useState('');

  const url = 'https://project.syaripedia.net/apiuploadfile/public/api/logbook';

  const getLogbookData = async () => {
    let idMahasiswa = await getIdMhs();
    let idku = JSON.parse(idMahasiswa);

    await axios
      .get(`${url}`)
      .then(async res => {
        console.log('logbook data: ', res.data);
        setIsLoading(false);
        setDataLogbook(
          res.data.data.filter(i => i.emailmahasiswa == idku.value.email),
        );
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const getIdMhs = () => {
    return new Promise(function (resolve, reject) {
      const id = AsyncStorage.getItem('userProfile');
      resolve(id);
    });
  };

  useEffect(() => {
    getLogbookData();
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Logbook"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Gap height={20} />
        <View style={styles.bottomContent}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            dataLogbook.map(itemLogbook => {
              return (
                <LogbookList
                  titleLogbook={itemLogbook.bimbingan}
                  key={itemLogbook.id}
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
            })
          )}
        </View>
        <View style={styles.actionbutton}>
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item
              buttonColor="#9b59b6"
              title="New Task"
              onPress={() => console.log('notes tapped!')}>
              <IcDownload />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#3498db"
              title="Notifications"
              onPress={() => {}}>
              <IcPlus />
            </ActionButton.Item>
          </ActionButton>
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
  bottomContent: {
    flex: 1,
  },
  actionbutton: {
    flex: 1,
  },
});
