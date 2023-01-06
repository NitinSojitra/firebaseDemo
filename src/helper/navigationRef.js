import {createRef} from 'react';
import {CommonActions} from '@react-navigation/routers';

export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export const goBack = () => navigationRef.current?.goBack();

export const commonActions = (name, params) => {
  return navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: name, params: params}],
    }),
  );
};
