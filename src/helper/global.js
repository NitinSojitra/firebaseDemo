import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const hp = val => heightPercentageToDP(val);
export const wp = val => widthPercentageToDP(val);
export const fontSize = val => RFValue(val, 812);
