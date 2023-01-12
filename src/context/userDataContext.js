import firestore from '@react-native-firebase/firestore';
import createDataContext from './createDataContext';

const UserDataReducer = (state, action) => {
  switch (action.type) {
    case 'read':
      return {
        allUserList: action.payload,
      };
    case 'update':
      return {};

    default:
      return state;
  }
};
const create = () => {
  return async data => {
    try {
      await firestore().collection('Users').doc().set(data);
    } catch (error) {
      console.log('error : ', error);
    }
  };
};

const read = dispatch => {
  return async () => {
    try {
      await firestore()
        .collection('Users')
        .get()
        .then(value => {
          let allData = [];
          value.forEach(v => {
            var id = v?.id;
            var data = v?.data();
            var obj = {
              id: id,
              data: data,
            };

            allData.push(obj);
          });
          console.log('allUserList :: ', allData);
          dispatch({type: 'read', payload: allData});
        });
    } catch (error) {
      console.log('error : ', error);
    }
  };
};

const update = () => {
  return async ({id, data}) => {
    try {
      await firestore()
        .collection('Users')
        .doc(id)
        .update(data)
        .then(() => {
          console.log('asasas');
        });
    } catch (error) {
      console.log('error : ', error);
    }
  };
};
const deleted = dispatch => {
  return async id => {
    try {
      await firestore().collection('Users').doc(id).delete();
    } catch (error) {
      console.log('error : ', error);
    }
  };
};

export const {Provider, Context} = createDataContext(
  UserDataReducer,
  {create, read, update, deleted},
  {allUserList: []},
);
