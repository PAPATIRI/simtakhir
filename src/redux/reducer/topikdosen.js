const initStateTopikDosen = {
  topikdosens: [],
};

export const topikDosenReducer = (state = initStateTopikDosen, action) => {
  if (action.type === 'SET_TOPIKDOSEN') {
    return {
      ...state,
      topikdosens: action.value,
    };
  }
  return state;
};
