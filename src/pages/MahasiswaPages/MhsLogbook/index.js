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
// import ActionButton from '@logvinme/react-native-action-button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
});
