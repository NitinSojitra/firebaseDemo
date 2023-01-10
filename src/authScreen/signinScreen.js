import React, {useContext, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import TextInputComp from '../components/textInput';
import {hp, wp} from '../helper/global';
import {appImage} from '../helper/image';
import {Context as AuthContext} from '../context/authContext';
import {navigate, goBack} from '../helper/navigationRef';
import {Snackbar} from 'react-native-paper';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const {state, signIn} = useContext(AuthContext);
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
      <Image
        style={{
          height: 133,
          width: 180,
          alignSelf: 'center',
        }}
        source={appImage?.macaron_logo}
      />
      <Text
        style={{
          fontSize: hp(4.4),
          fontWeight: '800',
          color: '#fff',
          alignSelf: 'center',
        }}>
        Login
      </Text>
      <Text
        style={{
          fontSize: hp(1.7),
          color: '#fff',
          alignSelf: 'center',
          marginTop: hp(0.2),
          marginBottom: hp(2),
        }}>
        Please sign in to continue
      </Text>

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
      <Text
        style={{
          fontSize: hp(1.7),
          color: '#FF748C',
          margin: 5,
          paddingHorizontal: 15,
          alignSelf: 'flex-end',
          fontWeight: '600',
        }}>
        Forgot Password?
      </Text>

      <TouchableOpacity
        disabled={(email == '', password == '')}
        onPress={async () => {
          await signIn({email, password});
          onToggleSnackBar();
        }}
        style={{
          backgroundColor: '#FF748C',
          marginVertical: hp(4),
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
          Login
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginBottom: hp(4),
        }}>
        <Text
          style={{
            fontSize: hp(1.7),
            color: '#fff',
          }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigate('signup')}>
          <Text
            style={{
              fontSize: hp(1.7),
              color: '#FF748C',
              fontWeight: '800',
            }}>
            {` Sign Up`}
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
          marginTop: hp(4),
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
            source={appImage?.facebook}
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
      {state?.errormessage != '' ? (
        <Snackbar
          duration={2000}
          visible={visible}
          onDismiss={onDismissSnackBar}>
          {state?.errormessage}
        </Snackbar>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383838',
  },
});

export default SigninScreen;
