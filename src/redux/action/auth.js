import axios from 'axios';
import {setLoading} from '.';
import {showMessage, storeData} from '../../utils';
import {API_HOST} from '../../config';

export const signInAction = (navigation, form) => dispatch => {
  axios
    .post(`${API_HOST.url}/auth/local`, form)
    .then(res => {
      // console.log(res.data);
      const token = res.data.jwt;
      const profile = res.data.user;

      storeData('token', {value: token});
      storeData('userProfile', {value: profile});
      dispatch(setLoading(false));

      profile.role.type == 'mahasiswa'
        ? navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
        : navigation.reset({index: 0, routes: [{name: 'DosenMainApp'}]});
      showMessage('berhasil login', 'success');
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage('gagal masuk akun, periksa data anda', 'danger');
    });
};
