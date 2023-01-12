import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {hp} from '../helper/global';
import TextInputComp from '../components/textInput';
import Header from '../components/header';
import {appImage} from '../helper/image';
import {Context as userDataContext} from '../context/userDataContext';
import {commonActions, navigate} from '../helper/navigationRef';

const HomeScreen = ({route}) => {
  const getData = route?.params?.item || {};

  console.log('getData :: ', getData);

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  useEffect(() => {
    if (Object.keys(getData).length !== 0) {
      setName(getData?.data?.name);
      setContact(getData?.data?.contact);
      setEmail(getData?.data?.email);
      setGender(getData?.data?.gender);
    }
  }, [getData]);

  const {create, update} = useContext(userDataContext);

  const onPresscreateData = async () => {
    var data = {
      name: name,
      contact: contact,
      email: email,
      gender: gender,
    };
    await create(data);
    setContact('');
    setName('');
    setEmail('');
    setGender('');
  };

  const onPressEditData = async () => {
    var id = getData?.id;
    var data = {
      name: name,
      contact: contact,
      email: email,
      gender: gender,
    };
    await update({id, data});
    navigate('desc');
    setContact('');
    setName('');
    setEmail('');
    setGender('');
  };
  // console.log(Object.keys(getData) == {});
  return (
    <ScrollView style={styles.container}>
      <Header title={'Add User'} />
      <View
        style={{
          backgroundColor: 'white',
          height: 120,
          width: 120,
          alignSelf: 'center',
          justifyContent: 'center',
          marginVertical: 15,
          borderRadius: 60,
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('camera');
            // choosePhoto();
          }}>
          <Image
            style={{
              height: 50,
              width: 50,
              alignSelf: 'center',
            }}
            source={appImage?.user}
          />
        </TouchableOpacity>
      </View>

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
        text={gender}
        setText={setGender}
        label={'Gender'}
        isBool={false}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: hp(3),
        }}>
        <TouchableOpacity
          disabled={(email == '', name == '', gender == '', contact == '')}
          onPress={async () => {
            {
              Object.keys(getData).length == 0
                ? onPresscreateData()
                : onPressEditData();
            }
          }}
          style={{
            backgroundColor: '#FF748C',
            borderRadius: 30,
            paddingVertical: 12,
            paddingHorizontal: 60,
          }}>
          <Text
            style={{
              fontSize: hp(2.2),
              color: '#fff',
              fontWeight: '600',
            }}>
            {Object.keys(getData).length === 0 ? `Add` : `Update`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            navigate('desc');
          }}
          style={{
            backgroundColor: '#FF748C',
            borderRadius: 30,
            paddingVertical: 12,
            paddingHorizontal: 60,
          }}>
          <Text
            style={{
              fontSize: hp(2.2),
              color: '#fff',
              fontWeight: '600',
            }}>
            Watch List
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383838',
  },
});

export default HomeScreen;
