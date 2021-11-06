import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  IcArrowDown,
  IcHamburgerMenu,
  IcSignOut,
  Mhs1,
  ProfilImg,
} from '../../../assets';
import {
  ButtonDangerSedond,
  CardProfile,
  CardUserProfile,
  Gap,
  TopNavbar,
} from '../../../components';
import {colors, fonts} from '../../../utils';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: colors.primary}} />
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: colors.primary}} />
);
const ThirdRoute = () => (
  <View style={{flex: 1, backgroundColor: colors.primary}} />
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: colors.accent}}
    style={styles.customTabBar}
    labelStyle={{color: colors.text.primary}}
    activeColor={{color: colors.text.accent}}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [userName, setUserName] = useState('');
  const [imgProfile, setImageProfile] = useState(null);
  const [userNim, setUserNim] = useState('');
  const layout = useWindowDimensions();

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
  };

  const [routes] = React.useState([
    {key: 'first', title: 'Topik'},
    {key: 'second', title: 'Sidang'},
    {key: 'third', title: 'Logbook'},
  ]);

  const getDataUser = async () => {
    try {
      const name = await AsyncStorage.getItem('userProfile');
      const data = JSON.parse(name);

      if (data != null) {
        setUserNim(data.value.mahasiswa.nim);
        setUserName(data.value.username);
        setImageProfile(data.value.mahasiswa.avatar.formats.small.url);
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
        onPress={() => navigation.toggleDrawer()}
      />
      <View style={styles.content}>
        <CardUserProfile
          nama={userName}
          nim={userNim}
          image={imgProfile}
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <Gap height={35} />
        <View style={styles.tabDetail}>
          <TabView
            navigationState={{index, routes}}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </View>
      </View>
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

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabDetail: {
    flex: 1,
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
  customTabBar: {
    backgroundColor: colors.primary,
  },
});
