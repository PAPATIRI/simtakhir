import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, ButtonDangerSedond, Gap, TopNavbar} from '../../../components';
import {IcArrowBack} from '../../../assets';
import {useDispatch} from 'react-redux';
import {hapusTopikAction, setLoading} from '../../../redux/action';

const DsnDetailTopikSaya = ({navigation, route}) => {
  const {
    judultopik,
    bidangtopik,
    deskripsitopik,
    periode,
    mahasiswa,
    penguji1,
    penguji2,
    id,
  } = route.params;

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('id topik: ', id);
    dispatch(setLoading(true));
    dispatch(hapusTopikAction(navigation, id));
  };

  return (
    <View style={styles.page}>
      <TopNavbar
        iconLeft={<IcArrowBack />}
        titleBar="Detail Penawaran Topik"
        onPress={() => {
          navigation.navigate('DsnTopikSkripsiSaya');
        }}
      />
      <View style={styles.content}>
        <View style={styles.detailData}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.labelData}>Judul</Text>
              <Gap height={2} />
              <Text style={styles.descData}>{judultopik}</Text>
              <Gap height={20} />
            </View>
            <View>
              <Text style={styles.labelData}>deskripsi topik</Text>
              <Gap height={2} />
              <Text style={styles.descData}>{deskripsitopik}</Text>
              <Gap height={20} />
            </View>
            <View style={styles.dataDouble}>
              <View style={styles.dataDoubleLeft}>
                <Text style={styles.labelData}>Bidang Topik</Text>
                <Gap height={2} />
                <Text style={styles.descData}>{bidangtopik}</Text>
                <Gap height={20} />
              </View>
              <View style={styles.dataDoubleRight}>
                <Text style={styles.labelData}>Periode</Text>
                <Gap height={2} />
                <Text style={styles.descData}>{periode}</Text>
                <Gap height={20} />
              </View>
            </View>
            <View style={styles.dataDouble}>
              <View style={styles.dataDoubleLeft}>
                <Text style={styles.labelData}>Mahasiswa Terpilih</Text>
                <Gap height={2} />
                <Text style={styles.descData}>
                  {mahasiswa ? mahasiswa : 'belum ada'}
                </Text>
                <Gap height={20} />
              </View>
              <View style={styles.dataDoubleRight}>
                <Text style={styles.labelData}>Penguji 1 & 2</Text>
                <Gap height={2} />
                <Text style={styles.descData}>
                  {
                    (penguji1 && penguji2
                      ? `${penguji1} ${penguji2}`
                      : 'belum ada',
                    penguji2 ? penguji2 : 'belum ada')
                  }
                </Text>
                <Gap height={20} />
              </View>
            </View>
            <Gap height={40} />
            <View style={styles.header}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('DsnPendaftarTopikSaya');
                }}>
                <View style={styles.btnHeader}>
                  <Text style={styles.textBtnHeader}>lihat pendaftar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View>
            <Button
              label="Edit Topik"
              onPress={() => navigation.navigate('DsnSuksesEditTopik')}
            />
            <Gap height={10} />
            <ButtonDangerSedond
              label="Hapus Topik"
              onPress={() => {
                Alert.alert(
                  'Hapus Topik Skripsi',
                  'Apakah Kamu Yakin Ingin menghapus topik ini?',
                  [
                    {
                      text: 'batal',
                      style: 'cancel',
                    },
                    {
                      text: 'yakin',
                      onPress: () => {
                        onSubmit();
                      },
                    },
                  ],
                  {cancelable: false},
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DsnDetailTopikSaya;

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.secondary,
    lineHeight: 16 * 1.5,
  },
  data: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.secondary,
    lineHeight: 16 * 1.5,
  },
  btnHeader: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textBtnHeader: {
    color: colors.text.white,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    lineHeight: 16 * 1.5,
  },
  detailData: {
    flex: 1,
    justifyContent: 'space-between',
  },
  labelData: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textTransform: 'capitalize',
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  descData: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  dataDouble: {
    flexDirection: 'row',
  },
  dataDoubleLeft: {
    flex: 1,
  },
  dataDoubleRight: {
    flex: 1,
  },
});
