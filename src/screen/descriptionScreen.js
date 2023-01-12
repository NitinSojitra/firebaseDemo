import React, {useContext, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';

import Header from '../components/header';

import {Context as userDataContext} from '../context/userDataContext';
import {goBack} from '../helper/navigationRef';

const DescriptionScreen = ({navigation}) => {
  const {state, read, deleted} = useContext(userDataContext);

  useEffect(() => {
    read();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={'Description'} />
      <TouchableOpacity onPress={goBack}>
        <Text>Back</Text>
      </TouchableOpacity>
      <FlatList
        data={state?.allUserList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: '#82B2F7',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 20,
                margin: 10,
                padding: 20,
              }}>
              <Text style={{fontSize: 15, color: 'black'}}>
                Sr. No. : {index + 1}
              </Text>

              <Text style={{fontSize: 15, color: 'black'}}>
                Name : {item?.data?.name}
              </Text>

              <Text style={{fontSize: 15, color: 'black'}}>
                Contact : {item?.data?.contact}
              </Text>
              <Text style={{fontSize: 15, color: 'black'}}>
                Email : {item?.data?.email}
              </Text>

              <Text style={{fontSize: 15, color: 'black'}}>
                Gender : {item?.data?.gender}
              </Text>

              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Home', {item: item});
                  }}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 20,
                    marginRight: 5,
                    backgroundColor: '#4EC9B0',
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                    Update
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deleted(item?.id);
                    read();
                  }}
                  style={{
                    backgroundColor: '#4EC9B0',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 5,
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383838',
  },
});

export default DescriptionScreen;
