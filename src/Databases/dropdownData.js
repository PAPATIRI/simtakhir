import axios from 'axios';
import {API_HOST} from '../config';
import {getData} from '../utils';

// export const bidang = () => {
//   getData('token').then(res => {
//     axios
//       .get(`${API_HOST.url}/topikajuans`, {
//         headers: {
//           Authorization: `Bearer ${res.value}`,
//         },
//       })
//       .then(res => {
//         res.data;
//         console.log(res.data);
//       })
//       .catch(err => {
//         console.log('error bidang fetch: ', err);
//       });
//   });
// };

export const bidang = [
  '--- pilih bidang topik ---',
  'Pengolahan Citra',
  'Sistem Pakar',
  'Pengolahan Teks',
  'Media Pembelajaran',
  'Estimasi Effort Perangkat Lunak',
  'Sistem Informasi',
  'Kebutuhan Perangkat Lunak',
  'Augmented dan Virtual Reality',
  'Interaksi Manusia dan Komputer',
  'Social Network and Graph',
  'Multimedia dan Grafika',
  'Forensik Digital',
  'Kriptografi',
  'Keamanan Komputer',
  'Sistem Pendukung Keputusan',
  'Machine Learning dan Data Mining',
  'Network dan Sistem Terdistribusi',
];

export const periode = [
  '--- pilih periode kamu ---',
  'ganjil 2019 / 2020',
  'genap 2019 / 2020',
  'ganjil 2020 / 2021',
  'genap 2020 / 2021',
  'ganjil 2021 / 2022',
  'genap 2021 / 2022',
];

export const dospem = [
  '--- pilih dosen pembimbing ---',
  'Adhi Prahara, S.Si., M.Cs',
  'Ahmad Azhari, S.Kom., M.Eng',
  'Ali Tarmuji, S.T., M. Cs',
  'Anna Hendri Soleliza Jones, S. Kom, M.Cs.',
  'Ir. Ardi Pujiyanta, M. T.',
  'Andri Pranolo, S.Kom., M. Cs',
  'Arfiani Nur Khusna, S.T., M.Kom.',
  'Dewi Pramudi Ismi, S.T., M.CompSc',
  'Dewi Soyusiawaty, S.T., M.T',
  'Dinan Yulianto, S.T., M.Eng.',
  'Dwi Normawati, S.T., M.Eng.',
  'Eko Aribowo, S.T., M.Kom',
];
