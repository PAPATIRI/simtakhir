import axios from 'axios';
import {setLoading} from '.';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

export const getTopikDosenAction = () => dispatch => {
  getData('token').then(res => {
    axios
      .get(`${API_HOST.url}/topikskripsis`, {
        headers: {
          Authorization: `Bearer ${res.value}`,
        },
      })
      .then(res => {
        console.log(res.data);
        dispatch({type: 'SET_TOPIKDOSEN', value: res.data});
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log('err: ', err);
        dispatch(setLoading(false));
      });
  });
};
