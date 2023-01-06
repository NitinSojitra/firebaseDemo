import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {hp} from '../helper/global';
import {appImage} from '../helper/image';
import {navigate} from '../helper/navigationRef';

const LoadingScreen = () => {
  return (
    <>
      <View style={styles.container1}>
        <Image
          style={{
            height: 148,
            width: 188,
            alignSelf: 'center',
            marginBottom: hp(3),
          }}
          source={appImage?.logo}
        />
      </View>
      <View style={styles.container2}>
        <Text
          style={{
            fontSize: hp(3.6),
            color: '#fff',
            alignSelf: 'center',
            marginTop: hp(2),
          }}>
          Welcome
        </Text>
        <Text
          style={{
            fontSize: hp(2.3),
            color: '#fff',
            alignSelf: 'center',
            marginTop: hp(1.2),
          }}>
          CRAVING SUGAR?
        </Text>
        <Text
          style={{
            fontSize: hp(1.7),
            color: '#fff',
            alignSelf: 'center',
            marginTop: hp(0.7),
          }}>
          Create an account and enjoy the sugar rush!
        </Text>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity
          onPress={() => navigate('signup')}
          style={{
            backgroundColor: '#F19D9D',
            borderRadius: 30,
            paddingVertical: 15,
            paddingHorizontal: 72,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(1.7),
              color: '#fff',
              fontWeight: '800',
            }}>
            Getting Started
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginVertical: hp(3.6),
          }}>
          <Text
            style={{
              fontSize: hp(1.7),
              color: '#fff',
            }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigate('signin')}>
            <Text
              style={{
                fontSize: hp(1.7),
                color: '#000',
                fontWeight: '800',
              }}>
              {` Login`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 2,
    justifyContent: 'flex-end',
    backgroundColor: '#FF748C',
  },
  container2: {
    flex: 1,
    backgroundColor: '#FF748C',
  },
  container3: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#FF748C',
  },
});

export default LoadingScreen;
