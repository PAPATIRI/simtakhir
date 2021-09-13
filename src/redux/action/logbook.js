import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

export const getLogbookData = () => dispatch => {
  getData('token').then(res => {
    Axios.get(`${API_HOST.url}/logbooks`, {
      headers: {
        Authorization: `Bearer ${res.value}`,
      },
    })
      .then(res => {
        console.log(res.data);
        dispatch({type: 'SET_LOGBOOK', value: res.data});
      })
      .catch(err => {
        console.log('err: ', err);
      });
  });
};
