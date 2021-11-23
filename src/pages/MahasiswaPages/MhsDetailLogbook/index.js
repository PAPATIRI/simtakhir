import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {
  IcAcceptedLogbook,
  IcArrowBack,
  IcWaitingLogbook,
} from '../../../assets';
import {Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const MhsDetailLogbook = ({navigation, route}) => {
  const {bimbingan, catatankemajuan, updated_at, status, filetambahan, path} =
    route.params;
  const prefixUrl =
    'https://project.syaripedia.net/daftarsidang/storage/app/public/';

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
        <Gap height={16} />
        <View>
          <Text style={styles.labelData}>Kegiatan</Text>
          <Gap height={2} />
          <Text style={styles.descData}>{bimbingan}</Text>
        </View>
        <Gap height={16} />
        <View>
          <Text style={styles.labelData}>Catatan Kemajuan</Text>
          <Gap height={2} />
          <Text style={styles.descData}>{catatankemajuan}</Text>
        </View>
        <Gap height={16} />
        <View>
          <Text style={styles.labelData}>File Tambahan</Text>
          <Gap height={2} />
          <Text style={styles.descData}>{filetambahan}</Text>
          <Gap height={2} />
          <Image source={{uri: `${prefixUrl}${path}`}} style={styles.image} />
        </View>
        <Gap height={16} />
        <View>
          <Text style={styles.labelData}>Paraf Dosen Pembimbing</Text>
          <Gap height={2} />
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
  labelData: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
  descData: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
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
  image: {
    height: 200,
    width: 200,
    borderRadius: 20,
  },
});
