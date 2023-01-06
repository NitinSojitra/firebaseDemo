import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/header';
import {navigate} from '../helper/navigationRef';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={'Setting'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigate('signin');
          }}>
          <Text
            style={{
              fontSize: 18,

              alignSelf: 'center',
              color: 'black',
            }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SettingScreen;
