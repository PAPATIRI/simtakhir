import axios from 'axios';
import {setLoading} from '.';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';

const url = 'https://project.syaripedia.net/daftarsidang/public/api/logbook';

export const tambahLogbookAction = (form, navigation) => dispatch => {
  const data = new FormData();
  data.append('bimbingan', form.bimbingan);
  data.append('catatankemajuan', form.catatankemajuan);
  data.append('emailmahasiswa', form.emailmahasiswa);
  data.append('status', 'menunggu');
  if (form.file) {
    data.append('file', form.file[0]);
  } else {
    data.append('file', null);
  }

  console.log('data logbook: ', data);
  if (data._parts[4][1]) {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        console.log(res);
        dispatch(setLoading(false));
        navigation.navigate('MhsSuksesTambahLogbook');
      })
      .catch(err => {
        console.log('err', err);
        dispatch(setLoading(false));
        showMessage('gagal tambah logbook', 'danger');
      });
  } else {
    showMessage('isi data dan tambahkan file', 'danger');
    dispatch(setLoading(false));
  }
};
