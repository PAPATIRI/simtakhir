import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const MhsDetailHasilAjuan = ({navigation, route}) => {
  const {judultopik, dekripsitopik, bidangtopik, status, dosentujuan, periode} =
    route.params;

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        onPress={() => navigation.goBack()}
        titleBar="Detail Hasil Ajuan"
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.label}>judul topik</Text>
          <Gap height={2} />
          <Text style={styles.data}>{judultopik}</Text>
          <Gap height={16} />
        </View>
        <View>
          <Text style={styles.label}>deskripsi topik</Text>
          <Gap height={2} />
          <Text style={styles.data}>{dekripsitopik}</Text>
          <Gap height={16} />
        </View>
        <View>
          <Text style={styles.label}>bidang topik</Text>
          <Gap height={2} />
          <Text style={styles.data}>{bidangtopik}</Text>
          <Gap height={16} />
        </View>
        <View>
          <Text style={styles.label}>dosen tujuan</Text>
          <Gap height={2} />
          <Text style={styles.data}>{dosentujuan}</Text>
          <Gap height={16} />
        </View>
        <View>
          <Text style={styles.label}>periode</Text>
          <Gap height={2} />
          <Text style={styles.data}>{periode}</Text>
          <Gap height={16} />
        </View>
        <View>
          <Text style={styles.label}>status</Text>
          <Gap height={2} />
          <View style={styles.statusWrapper(status)}>
            <Text style={styles.statusdata}>{status}</Text>
          </View>
          <Gap height={16} />
        </View>
      </View>
    </View>
  );
};

export default MhsDetailHasilAjuan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    backgroundColor: colors.primary,
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  data: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.primary,
  },
  statusdata: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.white,
  },
  statusWrapper: status => ({
    backgroundColor: status == 'ditolak' ? colors.error : colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  }),
});
