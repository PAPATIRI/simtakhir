import axios from 'axios';
import {setLoading} from '.';
import {API_HOST} from '../../config';
import {showMessage} from '../../utils';
import {getData} from '../../utils';

export const getBidangTopikAction = () => dispatch => {
  getData('token').then(res => {
    axios
      .get(`${API_HOST.url}/bidangtopiks`, {
        headers: {
          Authorization: `Bearer ${res.value}`,
        },
      })
      .then(res => {
        dispatch({type: 'SET_BIDANGTOPIK', value: res.data});
      })
      .catch(err => {
        console.log('err: ', err);
      });
  });
};

export const ajukanTopikAction = (navigation, form) => dispatch => {
  getData('token').then(res => {
    axios
      .post(`${API_HOST.url}/topikajuans`, form, {
        headers: {
          Authorization: `Bearer ${res.value}`,
        },
      })
      .then(res => {
        console.log('data success: ', res.data);
        navigation.navigate('MhsSuksesAjukanTopik');
      })
      .catch(err => {
        console.log('errornya: ', err);
        showMessage('gagal mengajukan topik', 'danger');
        dispatch(setLoading(false));
      });
  });
};
