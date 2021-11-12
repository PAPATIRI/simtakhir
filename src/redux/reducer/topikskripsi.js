const initStateTambahTopik = {
  judultopik: '',
  deskripsitopik: '',
  bidangtopik: '',
  periode: '',
  dosenpenawar: '',
  status: 'open',
};

export const tambahTopikReducer = (state = initStateTambahTopik, action) => {
  if (action.type === 'SET_TAMBAHTOPIK') {
    return {
      ...state,
      judultopik: action.value.judultopik,
      deskripsitopik: action.value.deskripsitopik,
      bidangtopik: action.value.bidangtopik,
      periode: action.value.periode,
      dosenpenawar: action.value.dosenpenawar,
    };
  }

  return state;
};
