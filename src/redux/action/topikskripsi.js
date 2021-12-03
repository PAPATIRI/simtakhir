import axios from 'axios';
import {setLoading} from '.';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';

export const tambahTopikAction = (navigation, form) => dispatch => {
  getData('token').then(res => {
    axios
      .post(`${API_HOST.url}/topikskripsis`, form, {
        headers: {
          Authorization: `Bearer ${res.value}`,
          'Content-Type': 'application/json',
        },
      })
      .then(resp => {
        navigation.navigate('DsnSuksesTambahTopik');
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log('error: ', err);
        showMessage('gagal menambah topik skripsi', 'danger');
        dispatch(setLoading(false));
      });
  });
};

export const hapusTopikAction = (navigation, id) => dispatch => {
  getData('token').then(res => {
    axios
      .delete(`${API_HOST.url}/topikskripsis/${id}`, {
        headers: {
          Authorization: `Bearer ${res.value}`,
        },
      })
      .then(response => {
        dispatch(setLoading(false));
        navigation.navigate('DsnTopikSkripsiSaya');
        showMessage(`success menghapus topik`, 'success');
      })
      .catch(err => {
        console.log('err: ', err);
        dispatch(setLoading(false));
      });
  });
};
