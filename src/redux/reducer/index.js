import {combineReducers} from 'redux';
import {ajukanTopikReducer} from './ajukantopik';
import {globalReducer} from './global';
import {logbookReducer} from './logbook';
import {topikDosenReducer} from './topikdosen';
import {tambahTopikReducer} from './topikskripsi';
import {daftarSemproReducer} from './daftarsempro';
import {daftarPendadaranReducer} from './daftarpendadaran';

const reducer = combineReducers({
  ajukanTopikReducer,
  globalReducer,
  logbookReducer,
  topikDosenReducer,
  tambahTopikReducer,
  daftarSemproReducer,
  daftarPendadaranReducer,
});

export default reducer;
