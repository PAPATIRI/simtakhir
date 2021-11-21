const initStateDaftarSempro = {
  mahasiswapengaju: '',
  buktipembayaran: null,
  pathbuktipembayaran: null,
  toefl: null,
  pathtoefl: null,
  naskahbab123: null,
  pathnaskahbab123: null,
  transkipnilai: null,
  pathtranskipnilai: null,
};

export const daftarSemproReducer = (state = initStateDaftarSempro, action) => {
  if (action.type === 'SET_DAFTARSEMPRO1') {
    return {
      ...state,
      mahasiswapengaju: action.value.mahasiswapengaju,
      buktipembayaran: action.value.buktipembayaran,
      pathbuktipembayaran: action.value.pathbuktipembayaran,
      toefl: action.value.toefl,
      pathtoefl: action.value.pathtoefl,
    };
  }

  if (action.type === 'SET_DAFTARSEMPRO2') {
    return {
      ...state,
      naskahbab123: action.value.naskahbab123,
      pathnaskahbab123: action.value.pathnaskahbab123,
      transkipnilai: action.value.transkipnilai,
      pathtranskipnilai: action.value.pathtranskipnilai,
    };
  }

  return state;
};
