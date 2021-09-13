import {combineReducers} from 'redux';
import {ajukanTopikReducer} from './ajukantopik';
import {globalReducer} from './global';
import {logbookReducer} from './logbook';
import {topikDosenReducer} from './topikdosen';

const reducer = combineReducers({
  ajukanTopikReducer,
  globalReducer,
  logbookReducer,
  topikDosenReducer,
});

export default reducer;
