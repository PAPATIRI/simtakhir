import {showMessage as showToast} from 'react-native-flash-message';

export const showMessage = (message, type) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#00BF9F' : '#FF6455',
  });
};
