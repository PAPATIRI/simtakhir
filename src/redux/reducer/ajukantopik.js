const initStateAjukanTopik = {
  judultopik: '',
  dekripsitopik: '',
  bidangtopik: '',
  periode: '',
  dosentujuan: '',
  mahasiswapengaju: '',
  status: 'menunggu',
};

export const ajukanTopikReducer = (state = initStateAjukanTopik, action) => {
  if (action.type === 'SET_JUDUL') {
    return {
      ...state,
      judultopik: action.value.judultopik,
      dekripsitopik: action.value.dekripsitopik,
      mahasiswapengaju: action.value.mahasiswapengaju,
    };
  }

  if (action.type === 'SET_DETAILTOPIK') {
    return {
      ...state,
      bidangtopik: action.value.bidangtopik,
      periode: action.value.periode,
      dosentujuan: action.value.dosentujuan,
    };
  }

  if (action.type === 'SET_BIDANGTOPIK') {
    return {
      ...state,
      bidangtopik: action.value,
    };
  }
  return state;
};
