import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={'Home'} />
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            color: 'black',
          }}>
          {/* Home */}
        </Text>
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

export default HomeScreen;
