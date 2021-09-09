import {combineReducers} from 'redux';
import {ajukanTopikReducer} from './ajukantopik';
import {globalReducer} from './global';

const reducer = combineReducers({ajukanTopikReducer, globalReducer});

export default reducer;
