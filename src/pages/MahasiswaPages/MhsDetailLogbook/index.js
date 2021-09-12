import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IcAcceptedLogbook,
  IcArrowBack,
  IcWaitingLogbook,
} from '../../../assets';
import {Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const MhsDetailLogbook = ({navigation, route}) => {
  const {kegiatan, catatankemajuan, updated_at, status} = route.params;
  const optionsDate = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Detail Logbook"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.date}>
          <Text style={styles.dateText}>
            {new Date(updated_at).toDateString()}
          </Text>
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.judulTopik}>Kegiatan</Text>
          <Gap height={5} />
          <Text style={styles.descTopik}>{kegiatan}</Text>
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.judulTopik}>Catatan Kemajuan</Text>
          <Gap height={5} />
          <Text style={styles.descTopik}>{catatankemajuan}</Text>
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.judulTopik}>File Tambahan</Text>
          <Gap height={5} />
          <Text style={styles.descTopik}>-</Text>
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.judulTopik}>Paraf Dosen Pembimbing</Text>
          <Gap height={5} />
          <View style={styles.paraf}>
            {status == 'menunggu' ? (
              <IcWaitingLogbook />
            ) : (
              <IcAcceptedLogbook />
            )}
            <Text style={styles.parafText}>{status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MhsDetailLogbook;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dateText: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.accent,
  },
  judulTopik: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
  },
  descTopik: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
  },
  paraf: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  parafText: {
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    textTransform: 'capitalize',
    fontSize: 16,
    marginLeft: 10,
  },
});
