import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {IcArrowBack} from '../../../assets';
import {Button, Gap, TopNavbar} from '../../../components';
import {colors, fonts} from '../../../utils';

const DsnDetailBimbingan = ({navigation, route}) => {
  const {nama, status, nim, topikskripsi, avatar} = route.params;

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Detail Bimbingan"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <View style={styles.contentData}>
          <View style={styles.cardWrapper}>
            <Image
              source={{uri: `${avatar.formats.thumbnail.url}`}}
              style={styles.image}
            />
            <Gap width={20} />
            <View style={styles.cardText}>
              <Text style={styles.cardName}>{nama}</Text>
              <Gap height={10} />
              <Text style={styles.cardDetail}>{nim}</Text>
              <Text style={styles.cardDetail}>{status}</Text>
            </View>
          </View>
          <Gap height={20} />
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <Text style={styles.label}>Judul Topik</Text>
                <Gap height={2} />
                <Text style={styles.data}>{topikskripsi.judultopik}</Text>
                <Gap height={16} />
              </View>
              <View>
                <Text style={styles.label}>Deskripsi Topik</Text>
                <Gap height={2} />
                <Text style={styles.data}>{topikskripsi.deskripsitopik}</Text>
                <Gap height={16} />
              </View>
              <View>
                <Text style={styles.label}>Bidang Topik</Text>
                <Gap height={5} />
                <Text style={styles.data}>{topikskripsi.bidangtopik}</Text>
                <Gap height={16} />
              </View>
              <View>
                <Text style={styles.label}>Periode</Text>
                <Gap height={2} />
                <Text style={styles.data}>{topikskripsi.periode}</Text>
                <Gap height={16} />
              </View>
            </ScrollView>
          </View>
        </View>
        <Gap height={15} />
        <Button label="Lihat Logbook" />
      </View>
    </View>
  );
};

export default DsnDetailBimbingan;

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
  divider: {
    height: 2,
    backgroundColor: colors.blackPrimary,
  },
  contentData: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
    textTransform: 'capitalize',
  },
  data: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  cardWrapper: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cardName: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    lineHeight: 18 * 1.5,
    color: colors.text.white,
  },
  cardDetail: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 16 * 1.5,
    color: colors.text.white,
    textTransform: 'capitalize',
  },
});
