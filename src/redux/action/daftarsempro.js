import axios from 'axios';
import {setLoading} from '.';

const url =
  'https://project.syaripedia.net/apiuploadfile/public/api/daftarsempro';

export const daftarSemproAction = (form, navigation) => dispatch => {
  console.log(form);
  const data = new FormData();
  data.append('mahasiswapengaju', form.mahasiswapengaju);
  data.append('buktipembayaran', form.buktipembayaran[0]);
  data.append('pathbuktipembayaran', form.buktipembayaran[0].uri);
  data.append('toefl', form.toefl[0]);
  data.append('pathtoefl', form.toefl[0].uri);
  data.append('naskahbab123', form.naskahbab123[0]);
  data.append('pathnaskahbab123', form.naskahbab123[0].uri);
  data.append('transkipnilai', form.transkipnilai[0]);
  data.append('pathtranskipnilai', form.transkipnilai[0].uri);

  console.log(form.buktipembayaran[0]);
  console.log(data._parts);

  axios
    .post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      console.log(res);
      dispatch(setLoading(false));
      navigation.navigate('MhsSuksesDaftarSidang');
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
    });
};
