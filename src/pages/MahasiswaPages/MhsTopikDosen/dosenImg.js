import React from 'react';
import {AhmadAzhari, ArdiansyahImg} from '../../../assets';

export const dosenImg = data => {
  if (data == 'Ardiansyah S.T., M.Cs') {
    return ArdiansyahImg;
  } else if (data == 'Ahmad Azhari, S.Kom., M.Eng.') {
    return AhmadAzhari;
  }
};
