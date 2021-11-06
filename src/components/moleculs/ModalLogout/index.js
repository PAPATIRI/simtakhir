import React, {useState} from 'react';
import {StyleSheet, Modal, Text, View, Pressable} from 'react-native';
import {ButtonDangerSedond} from '../..';

const ModalLogout = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
  };

  return (
    <View style={{flex: 1}}>
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
  );
};

export default ModalLogout;

const styles = StyleSheet.create({});
