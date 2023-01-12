import {commonActions} from '../helper/navigationRef';
import createDataContext from './createDataContext';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errormessage: action.payload};
    case 'signin':
      return {errormessage: '', token: action.payload};
    case 'signout':
      return {errormessage: '', token: null};
    default:
      return state;
  }
};
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  console.log('token', token);
  if (token) {
    dispatch({type: 'signin', payload: token});
    commonActions('tab');
  } else {
    commonActions('signin');
  }
};

const signUp = dispatch => {
  return async ({email, conPassword}) => {
    await auth()
      .createUserWithEmailAndPassword(email, conPassword)
      .then(async userCredential => {
        await AsyncStorage.setItem('token', userCredential.user?.uid);
        dispatch({type: 'signin', payload: userCredential.user?.uid});
        commonActions('signin');
      })
      .catch(error => {
        console.log(error.code);
        if (error.code === 'auth/weak-password') {
          dispatch({
            type: 'add_error',
            payload: 'weak-password!',
          });
        }
        if (error.code === 'auth/invalid-email') {
          dispatch({
            type: 'add_error',
            payload: 'That email address is invalid!',
          });
        }
      });
  };
};
const signIn = dispatch => {
  return async ({email, password}) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async userCredential => {
        await AsyncStorage.setItem('token', userCredential.user?.uid);
        dispatch({type: 'signin', payload: userCredential.user?.uid});
        commonActions('tab');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          dispatch({
            type: 'add_error',
            payload: 'User account are not created!',
          });
        }
        if (error.code === 'auth/wrong-password') {
          dispatch({
            type: 'add_error',
            payload: 'wrong-password',
          });
        }
      });
  };
};
const signOut = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
  commonActions('Signin');
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signUp, signIn, tryLocalSignin, signOut},
  {token: null, errormessage: ''},
);
