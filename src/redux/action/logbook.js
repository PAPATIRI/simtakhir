import axios from 'axios';
import {setLoading} from '.';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';

export const getLogbookDataAction = () => dispatch => {
  getData('token').then(res => {
    axios
      .get(`${API_HOST.url}/logbooks`, {
        headers: {
          Authorization: `Bearer ${res.value}`,
        },
      })
      .then(res => {
        console.log(res.data);
        dispatch({type: 'SET_LOGBOOK', value: res.data});
        // despatch(setLoading(false));
      })
      .catch(err => {
        console.log('err: ', err);
        // despatch(setLoading(false));
      });
  });
};

export const addLogbookAction = (navigation, form) => dispatch => {
  getData('token').then(res => {
    axios
      .post(`${API_HOST.url}/logbooks`, {
        headers: {
          Authorization: `Bearer ${res.value}`,
        },
      })
      .then(res => {
        console.log(res.data);
        dispatch({type: 'SET_TAMBAHLOGBOOK', value: res.data});
        navigation.navigate('MhsSuksesTambahLogbook');
        showMessage('berhasil tambah logbook', 'success');
      })
      .catch(err => {
        console.log('err', err);
        showMessage('gagal tambah logbook', 'danger');
      });
  });
};
