import {combineReducers} from 'redux';
import {ajukanTopikReducer} from './ajukantopik';
import {globalReducer} from './global';
import {logbookReducer} from './logbook';
import {topikDosenReducer} from './topikdosen';
import {tambahTopikReducer} from './topikskripsi';
import {daftarSemproReducer} from './daftarsempro';

const reducer = combineReducers({
  ajukanTopikReducer,
  globalReducer,
  logbookReducer,
  topikDosenReducer,
  tambahTopikReducer,
  daftarSemproReducer,
});

export default reducer;
