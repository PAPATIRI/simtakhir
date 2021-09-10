import axios from 'axios';
import {storeData} from '../../utils';

const API_HOST = {
  url: 'https://simtakhirapi.herokuapp.com',
};

export const signInAction = (navigation, form) => dispatch => {
  axios
    .post(`${API_HOST.url}/auth/local`, form)
    .then(res => {
      const token = `${res.data.jwt}`;
      const profile = res.data.user;

      storeData('token', {value: token});
      storeData('userProfile', {value: profile});
      dispatch({type: 'SET_LOADING', value: false});

      profile.role.type == 'mahasiswa'
        ? navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
        : navigation.reset({index: 0, routes: [{name: 'DosenMainApp'}]});
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', value: false});
      console.log('error: ', err);
    });
};
