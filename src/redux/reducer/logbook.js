const initLogbook = {
  logbook: [],
};

export const logbookReducer = (state = initLogbook, action) => {
  if (action.type === 'SET_LOGBOOK') {
    return {
      ...state,
      logbook: action.value,
    };
  }

  if (action.type === 'SET_TAMBAHLOGBOOK') {
    return {
      ...state,
      kegiatan: action.value.kegiatan,
      catatankemajuan: action.value.catatankemajuan,
      filetambahan: action.value.filetambahan,
    };
  }
  return state;
};
