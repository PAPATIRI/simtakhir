import axios from 'axios';
import {setLoading} from '.';
import {showMessage} from '../../utils';

const url = 'https://project.syaripedia.net/daftarsidang/public/api/pendadaran';

export const daftarPendadaranAction = (form, navigation) => dispatch => {
  const data = new FormData();
  data.append('mahasiswapengaju', form.mahasiswapengaju);
  if (form.buktipembayaran) {
    data.append('buktipembayaran', form.buktipembayaran[0]);
    data.append('pathbuktipembayaran', form.buktipembayaran[0].uri);
  } else {
    data.append('buktipembayaran', null);
  }

  if (form.toefl) {
    data.append('toefl', form.toefl[0]);
    data.append('pathtoefl', form.toefl[0].uri);
  } else {
    data.append('toefl', null);
  }

  if (form.naskahbab123) {
    data.append('naskahbab123', form.naskahbab123[0]);
    data.append('pathnaskahbab123', form.naskahbab123[0].uri);
  } else {
    data.append('naskahbab123', null);
  }

  if (form.transkipnilai) {
    data.append('transkipnilai', form.transkipnilai[0]);
    data.append('pathtranskipnilai', form.transkipnilai[0].uri);
  } else {
    data.append('transkipnilai', null);
  }

  if (form.buktibebasspp) {
    data.append('buktibebasspp', form.buktibebasspp[0]);
    data.append('pathbuktibebasspp', form.buktibebasspp[0].uri);
  } else {
    data.append('buktibebasspp', null);
  }

  console.log('data pendadaran: ', data);

  axios
    .post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      console.log(res);
      dispatch(setLoading(false));
      navigation.navigate('MhsSuksesDaftarPendadaran');
    })
    .catch(err => {
      console.log(err);
      showMessage('tambahkan file', 'danger');
      dispatch(setLoading(false));
    });
};
