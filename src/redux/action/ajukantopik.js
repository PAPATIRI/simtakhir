import axios from 'axios';
import {setLoading} from '.';
import {API_HOST} from '../../config';
import {showMessage} from '../../utils';
import {getData} from '../../utils';

export const ajukanTopikAction = (navigation, form) => dispatch => {
  getData('token').then(res => {
    axios
      .post(`${API_HOST.url}/ajukantopiks`, form, {
        headers: {
          Authorization: `Bearer ${res.value}`,
        },
      })
      .then(res => {
        console.log('data success: ', res.data);
        dispatch(setLoading(false));
        navigation.navigate('MhsSuksesAjukanTopik');
      })
      .catch(err => {
        console.log('errornya: ', err);
        showMessage('gagal mengajukan topik', 'danger');
        dispatch(setLoading(false));
      });
  });
};
