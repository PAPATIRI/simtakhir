import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  IcAcceptedLogbook,
  IcArrowBack,
  IcWaitingLogbook,
} from '../../../assets';
import {
  DataKosong,
  LoadingSpinner,
  LogbookList,
  TopNavbar,
} from '../../../components';
import {colors} from '../../../utils';

const DsnLogbookBimbingan = ({navigation, route}) => {
  const {user} = route.params;
  const [dataLogbook, setDataLogbook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = 'https://project.syaripedia.net/daftarsidang/public/api/logbook';

  const getLogbookData = async () => {
    await axios
      .get(`${url}`)
      .then(res => {
        setIsLoading(false);
        setDataLogbook(
          res.data.data.filter(i => i.emailmahasiswa == user.email),
        );
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      getLogbookData();
    });

    return willFocusSubscription;
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.goBack()}
        titleBar="Logbook Mahasiswa"
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollStyle}>
          {isLoading ? (
            <LoadingSpinner />
          ) : dataLogbook.length == 0 ? (
            <DataKosong
              title="opps, kosong"
              desc="sepertinya mahasiswa kamu belum memiliki logbook"
            />
          ) : (
            dataLogbook.map(itemLogbook => {
              return (
                <LogbookList
                  key={itemLogbook.id}
                  titleLogbook={itemLogbook.bimbingan}
                  dateLogbook={new Date(itemLogbook.updated_at).toDateString()}
                  iconStatus={
                    itemLogbook.status == 'menunggu' ? (
                      <IcWaitingLogbook />
                    ) : (
                      <IcAcceptedLogbook />
                    )
                  }
                  onPress={() => {
                    navigation.navigate(
                      'DsnDetailLogbookBimbingan',
                      itemLogbook,
                    );
                  }}
                />
              );
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default DsnLogbookBimbingan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingVertical: 15,
  },
  scrollStyle: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
