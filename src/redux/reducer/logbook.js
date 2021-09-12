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
  return state;
};
