import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {IcDownload} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const FileInput = ({label}) => {
  const [singleFile, setSingleFile] = useState(null);

  const uploadImage = async () => {
    //check jika ada file terseleksi atau belum
    if (singleFile != null) {
      //jika ada yang terseleksi maka buat FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      //upload ke url api
      let res = await fetch('http://localhost/upload.php', {
        method: 'post',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Succesfull');
      } else {
        alert('pilih dahulu file yang akan diupload');
      }
    }
  };

  //selecting file
  const selectFile = async () => {
    //membuka document picker untuk memilih satu
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      //print log realted to the file
      console.log('res: ' + JSON.stringify(res));
      //setting state untuk memampilkan atribut single file
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      //menghandle exception lain
      if (DocumentPicker.isCancel(err)) {
        alert('dibatalkan');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <Gap height={5} />
      <View style={styles.formInputWrapper}>
        <TouchableOpacity activeOpacity={0.7} onPress={selectFile}>
          <View style={styles.buttonWrapper}>
            <IcDownload />
          </View>
        </TouchableOpacity>
        {singleFile != null ? (
          <View style={styles.descFile}>
            <Text>{singleFile.uri}</Text>
            <Text> {singleFile.type}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default FileInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
  },
  formInputWrapper: {
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: colors.blackPrimary,
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  buttonWrapper: {
    backgroundColor: colors.button.primary.background,
    padding: 15,
    borderRadius: 5,
  },
  descFile: {
    alignItems: 'center',
    marginTop: 5,
  },
});
