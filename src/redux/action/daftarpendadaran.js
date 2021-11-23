import axios from 'axios';
import {setLoading} from '.';

const url = 'https://project.syaripedia.net/daftarsidang/public/api/pendadaran';

export const daftarPendadaranAction = (form, navigation) => dispatch => {
  const data = new FormData();
  console.log('naskah path: ', form.naskahbab123);
  data.append('mahasiswapengaju', form.mahasiswapengaju);
  data.append('buktipembayaran', form.buktipembayaran[0]);
  data.append('pathbuktipembayaran', form.buktipembayaran[0].uri);
  data.append('toefl', form.toefl[0]);
  data.append('pathtoefl', form.toefl[0].uri);
  data.append('naskahbab123', form.naskahbab123[0]);
  data.append('pathnaskahbab123', form.naskahbab123[0].uri);
  data.append('transkipnilai', form.transkipnilai[0]);
  data.append('pathtranskipnilai', form.transkipnilai[0].uri);
  data.append('buktibebasspp', form.buktibebasspp[0]);
  data.append('pathbuktibebasspp', form.buktibebasspp[0].uri);

  axios
    .post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      dispatch(setLoading(false));
      navigation.navigate('MhsSuksesDaftarPendadaran');
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
    });
};
