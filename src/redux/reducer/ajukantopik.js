const initStateAjukanTopik = {
  judultopik: '',
  deskripsitopik: '',
  bidangtopik: '',
  periode: '',
  dosenpembimbing: '',
};

export const ajukanTopikReducer = (state = initStateAjukanTopik, action) => {
  if (action.type === 'SET_JUDUL') {
    return {
      ...state,
      judultopik: action.value.judultopik,
      deskripsitopik: action.value.deskripsitopik,
    };
  }

  if (action.type === 'SET_DETAILTOPIK') {
    return {
      ...state,
      bidangtopik: action.value.bidangtopik,
      periode: action.value.periode,
      dosenpembimbing: action.value.dosenpembimbing,
    };
  }
  return state;
};
