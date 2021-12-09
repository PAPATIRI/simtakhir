import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  IcAcceptedLogbook,
  IcArrowBack,
  IcWaitingLogbook,
} from '../../../assets';
import {
  Button,
  DataKosong,
  Gap,
  LoadingSpinner,
  LogbookList,
  TopNavbar,
} from '../../../components';
import {colors} from '../../../utils';

const MhsLogbook = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataLogbook, setDataLogbook] = useState([]);

  const url = 'https://project.syaripedia.net/daftarsidang/public/api/logbook';

  const getLogbookData = async () => {
    let idMahasiswa = await getIdMhs();
    let idku = JSON.parse(idMahasiswa);

    await axios
      .get(url)
      .then(async res => {
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
    const willFocusSubscription = navigation.addListener('focus', () => {
      getLogbookData();
    });
    return willFocusSubscription;
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Logbook"
        onPress={() => navigation.navigate('MhsDrawer')}
      />
      <View style={styles.content}>
        <View style={styles.bottomContent}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingBottom: 5,
            }}>
            {isLoading ? (
              <LoadingSpinner />
            ) : dataLogbook.length == 0 ? (
              <DataKosong
                title="opps"
                desc="sepertinya kamu belum memiliki logbook sama sekali"
              />
            ) : (
              dataLogbook.map(itemLogbook => {
                return (
                  <LogbookList
                    titleLogbook={itemLogbook.bimbingan}
                    key={itemLogbook.id}
                    dateLogbook={new Date(
                      itemLogbook.updated_at,
                    ).toDateString()}
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
          </ScrollView>
        </View>
        <Gap height={20} />
        <View style={styles.actionbutton}>
          <Button
            label="Tambah Logbook"
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'MhsTambahLogbook'}],
              });
            }}
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 20,
  },
  bottomContent: {
    flex: 1,
  },
  actionbutton: {
    paddingHorizontal: 20,
  },
});
