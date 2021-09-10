import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcArrowDown, IcSignOut, ProfilImg} from '../../../assets';
import {
  ButtonDangerSedond,
  CardProfile,
  Gap,
  TopNavbar,
} from '../../../components';
import {colors, fonts} from '../../../utils';

let dataSkripsi = [
  {
    title: 'Detail Tugas Akhir',
    dataDetail: [
      {
        label: 'judul',
        judul:
          'pengembangan aplikasi mobile berbasis android untuk sistem pengelolaan tugas akhir mahasiswaa',
      },
      {
        label: 'deskripsi',
        judul:
          'merupakan pengembangan sistem berbasis mobile yang merupakan alternatif dari sistem berbasis web dengan memanfaatkan api',
      },
    ],
  },
  {
    title: 'Jadwal Sidang',
    dataDetail: [
      {
        label: 'ruang',
        judul: 'kampus 4 R.4.6.01',
      },
      {
        label: 'waktu',
        judul: '21 september 2021 10.30',
      },
    ],
  },
  {
    title: 'Logbook',
    dataDetail: [
      {
        label: 'keterangan',
        judul: 'terakhir ditambahkan 7 hari yang lalu',
      },
    ],
  },
];

const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(null);

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
  };

  return (
    <View style={styles.page}>
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
      <View style={styles.topNavWrapper}>
        <TopNavbar
          titleBar="Profil"
          iconRight={<IcSignOut />}
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <View style={styles.emptyView}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile
            image={ProfilImg}
            name="Siska Ameli"
            label1="status"
            data1="Metopen"
            label2="dosen pembimbing"
            data2="Ardiansyah S.T.,M.Cs"
          />
        </View>
        <View style={styles.menuList}>
          {dataSkripsi.map(({title, dataDetail}, index) => {
            return (
              <TouchableOpacity
                key={title}
                activeOpacity={0.7}
                onPress={() => {
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                style={styles.dropDownWrapper}>
                <View style={styles.dropDown}>
                  <View style={styles.heading}>
                    <Text style={styles.titleDropDown} key={title}>
                      {title}
                    </Text>
                    <IcArrowDown />
                  </View>
                  <View style={styles.subCategoryList}>
                    {index === currentIndex &&
                      dataDetail.map((data, label, judul) => (
                        <View>
                          <Text style={styles.subtitle} key={label}>
                            {data.label}
                          </Text>
                          <Gap height={5} />
                          <Text style={styles.dropDownContent} key={judul}>
                            {data.judul}
                          </Text>
                        </View>
                      ))}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 3,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardWrapper: {
    marginTop: -75,
    flex: 1,
    paddingHorizontal: 20,
  },
  topNavWrapper: {
    flex: 1,
  },
  emptyView: {
    flex: 1,
  },
  menuList: {
    flex: 2,
    paddingHorizontal: 20,
  },
  dropDown: {
    paddingHorizontal: 20,
    paddingTop: 12,
    marginBottom: 10,
    backgroundColor: colors.primary,
    elevation: 1,
    borderRadius: 5,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleDropDown: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    color: colors.text.accent,
  },
  subtitle: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
  },
  dropDownContent: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 15,
    lineHeight: 16 * 1.5,
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
    color: colors.text.primary,
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
    fontFamily: fonts.primary[600],
    lineHeight: 20 * 1.5,
    color: colors.text.danger,
  },
});
