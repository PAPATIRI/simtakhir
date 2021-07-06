const mainColor = {
  green1: '#00BF9F',
  blue1: '#0059B2',
  white1: '#F2F9FF',
  black1: ' #212121',
  black2: '#757575',
  black3: '#9E9E9E',
  red1: '#FF6455',
  orange1: '#FFA555',
};

export const colors = {
  primary: mainColor.white1,
  secondary: mainColor.blue1,
  error: mainColor.red1,
  warning: mainColor.orange1,
  text: {
    primary: mainColor.black1,
    secondary: mainColor.black2,
    disabled: mainColor.black3,
    error: mainColor.red1,
    warning: mainColor.orange1,
    accent: mainColor.green1,
  },
  button: {
    text: mainColor.white1,
    primary: {
      background: mainColor.green1,
      text: mainColor.white1,
    },
    secondary: {
      background: mainColor.white1,
      border: mainColor.black2,
      text: mainColor.black2,
    },
    warning: {
      background: mainColor.orange1,
    },
    danger: {
      background: mainColor.red1,
    },
  },
};
