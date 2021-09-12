import {combineReducers} from 'redux';
import {ajukanTopikReducer} from './ajukantopik';
import {globalReducer} from './global';
import {logbookReducer} from './logbook';

const reducer = combineReducers({
  ajukanTopikReducer,
  globalReducer,
  logbookReducer,
});

export default reducer;
