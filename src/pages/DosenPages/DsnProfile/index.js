import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {ArdiansyahImg, IcHamburgerMenu, IcSignOut} from '../../../assets';
import {
  TopNavbar,
  CardProfile,
  Gap,
  ButtonDangerSedond,
  CardUserProfile,
} from '../../../components';
import {colors, fonts} from '../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;

const dataStatusMahasiswa = [
  {
    name: 'Metopen',
    jumlahMahasiswaa: 7,
    color: '#F7BACE',
    legendFontColor: '#7f7f7f',
    legendFontSize: 12,
  },
  {
    name: 'Skripsi',
    jumlahMahasiswaa: 11,
    color: '#855964',
    legendFontColor: '#7f7f7f',
    legendFontSize: 12,
  },
];

const dataMahasiswa = [
  {
    name: '2020 / 2021',
    jumlahMahasiswa: 15,
    color: '#0059B2',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  },
  {
    name: '2021 / 2022',
    jumlahMahasiswa: 8,
    color: '#FFA555',
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  },
  {
    name: '2019 / 2020',
    jumlahMahasiswa: 3,
    color: '#F7BACE',
    legendFontColor: '#7f7f7f',
    legendFontSize: 12,
  },
];

const DsnProfile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [nidn, setNidn] = useState('');
  const [imageProfile, setImageProfile] = useState(null);

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
  };

  const getDataUser = async () => {
    try {
      const name = await AsyncStorage.getItem('userProfile');
      const data = JSON.parse(name);

      if (data != null) {
        setNidn(data.value.dosen.nidy);
        setUsername(data.value.username);
        setImageProfile(data.value.dosen.avatar.formats.thumbnail.url);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <View style={styles.page}>
      <TopNavbar
        iconRight={<IcHamburgerMenu />}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={styles.content}>
        <CardUserProfile
          nama={username}
          nim={nidn}
          image={imageProfile}
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <Gap height={20} />
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={true}
            horizontal
            contentContainerStyle={styles.scroll}>
            <View>
              <Text style={styles.chartTitle}>
                persentase Periode Mahasiswa Bimbingan
              </Text>
              <PieChart
                data={dataMahasiswa}
                width={screenWidth}
                height={130}
                chartConfig={{
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={'jumlahMahasiswa'}
                center={[0, 0]}
              />
            </View>
            {/* <Gap height={20} /> */}
            <View>
              <Text style={styles.chartTitle}>
                persentase Status Mahasiswa Bimbingan
              </Text>
              <PieChart
                data={dataStatusMahasiswa}
                width={screenWidth}
                height={130}
                chartConfig={{
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={'jumlahMahasiswaa'}
                center={[0, 0]}
              />
            </View>
          </ScrollView>
        </View>
        <Gap height={20} />
        <View style={styles.menuList}>
          <View style={styles.menuWrapper}>
            <Text style={styles.menuTitle}>Total Mahasiswa Bimbingan</Text>
            <View style={styles.menu}>
              <Text style={styles.menuName}>20 Mahasiswa</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonWrapper}
                onPress={() => {
                  navigation.navigate('DsnBimbingan');
                }}>
                <Text style={styles.buttonText}>selengkapnya</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.menuWrapper}>
            <Text style={styles.menuTitle}>Total Topik Tugas Akhir</Text>
            <View style={styles.menu}>
              <Text style={styles.menuName}>10 Topik</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonWrapper}
                onPress={() => {
                  navigation.navigate('DsnBimbingan');
                }}>
                <Text style={styles.buttonText}>selengkapnya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* MODAL LOG OUT */}
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.Wrapper}>
            <View style={styles.modalWrapper}>
              <Pressable
                style={styles.btnCloseModal}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={styles.textBtnClose}>batal</Text>
              </Pressable>
              <View style={styles.contentModal}>
                <Text style={styles.textModal}>
                  apakah kamu yakin ingin keluar akun ?
                </Text>
                <ButtonDangerSedond
                  type="danger"
                  label="Yakin"
                  onPress={signOut}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default DsnProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  chartTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 5,
    paddingLeft: 20,
  },
  menuList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    lineHeight: 18 * 1.5,
    color: colors.text.primary,
    marginBottom: 1,
  },
  menuName: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 16 * 1.5,
  },
  buttonWrapper: {
    backgroundColor: colors.accent,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.white,
  },
  btnCloseModal: {
    flexDirection: 'row',
    width: '30%',
    paddingVertical: 2,
    justifyContent: 'center',
    marginHorizontal: '35%',
  },
  textBtnClose: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: colors.text.white,
    backgroundColor: colors.blackSecondary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  Wrapper: {
    padding: 20,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalWrapper: {
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    padding: 20,
    height: '40%',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  contentModal: {
    height: '70%',
    justifyContent: 'space-between',
  },
  textModal: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
    lineHeight: 20 * 1.5,
    color: colors.text.primary,
  },
});
