import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import TextInputComp from '../components/textInput';
import {hp, wp} from '../helper/global';
import {appImage} from '../helper/image';
import {goBack, navigate} from '../helper/navigationRef';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <Image
          style={{
            height: 16,
            width: 16,
            margin: hp(3),
          }}
          source={appImage?.back}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: hp(4.4),
          fontWeight: '800',
          color: '#fff',
          alignSelf: 'center',
        }}>
        Create Account
      </Text>
      <Text
        style={{
          fontSize: hp(1.7),
          color: '#fff',
          alignSelf: 'center',
          marginTop: hp(0.2),
          marginBottom: hp(2),
        }}>
        Please fill the input below here.
      </Text>
      <TextInputComp
        text={name}
        setText={setName}
        label={'Name'}
        isBool={false}
      />
      <TextInputComp
        text={contact}
        setText={setContact}
        label={'Contact'}
        isBool={false}
      />
      <TextInputComp
        text={email}
        setText={setEmail}
        label={'Email'}
        isBool={false}
      />
      <TextInputComp
        text={password}
        setText={setPassword}
        label={'Password'}
        isBool={true}
      />
      <TextInputComp
        text={conPassword}
        setText={setConPassword}
        label={'Confirm Password'}
        isBool={true}
      />
      <TouchableOpacity
        onPress={() => navigate('signin')}
        style={{
          backgroundColor: '#FF748C',
          marginVertical: hp(3),
          borderRadius: 30,
          paddingVertical: 12,
          paddingHorizontal: 60,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: hp(2.2),
            color: '#fff',
            fontWeight: '600',
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginBottom: hp(3),
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
              color: '#FF748C',
              fontWeight: '800',
            }}>
            {` Login`}
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: hp(1.7),
          alignSelf: 'center',
          color: '#828282',
        }}>
        Or connect with
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: hp(3),
        }}>
        <TouchableOpacity>
          <Image
            style={{
              height: 42,
              width: 42,
              marginHorizontal: wp(7.5),
            }}
            source={appImage?.google}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              height: 42,
              width: 42,
              marginHorizontal: wp(7.5),
            }}
            source={appImage.facebook}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              height: 42,
              width: 42,
              marginHorizontal: wp(7.5),
            }}
            source={appImage?.twitter}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383838',
  },
});

export default SignupScreen;
