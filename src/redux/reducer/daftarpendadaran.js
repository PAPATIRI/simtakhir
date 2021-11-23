const initStateDaftarPendadaran = {
  mahasiswapengaju: '',
  buktipembayaran: null,
  pathbuktipembayaran: null,
  toefl: null,
  pathtoefl: null,
  naskahbab123: null,
  pathnaskahbab123: null,
  transkipnilai: null,
  pathtranskipnilai: null,
  buktibebasspp: null,
  pathbuktibebasspp: null,
};

export const daftarPendadaranReducer = (
  state = initStateDaftarPendadaran,
  action,
) => {
  if (action.type === 'SET_DAFTARPENDADARAN1') {
    return {
      ...state,
      mahasiswapengaju: action.value.mahasiswapengaju,
      buktipembayaran: action.value.buktipembayaran,
      pathbuktipembayaran: action.value.pathbuktipembayaran,
      toefl: action.value.toefl,
      pathtoefl: action.value.pathtoefl,
      buktibebasspp: action.value.buktibebasspp,
      pathbuktibebasspp: action.value.pathbuktibebasspp,
    };
  }

  if (action.type === 'SET_DAFTARPENDADARAN2') {
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
