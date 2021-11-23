import {addLogbookAction} from '../action';

const initLogbook = {
  bimbingan: '',
  catatankemajuan: '',
  emailmahasiswa: '',
  status: '',
  file: null,
};

export const logbookReducer = (state = initLogbook, action) => {
  if (action.type === 'SET_TAMBAHLOGBOOK') {
    return {
      ...state,
      bimbingan: action.value.bimbingan,
      catatankemajuan: action.value.catatankemajuan,
      emailmahasiswa: action.value.emailmahasiswa,
      status: action.value.status,
      file: action.value.file,
    };
  }
  return state;
};
