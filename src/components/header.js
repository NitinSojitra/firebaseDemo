import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {hp} from '../helper/global';
import {appImage} from '../helper/image';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: hp(8),
        flexDirection: 'row',
        backgroundColor: '#FF91A4',
        borderBottomLeftRadius: 50,
      }}>
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image
          style={{
            height: 35,
            width: 35,
            tintColor: '#fff',
            marginLeft: 10,
          }}
          source={appImage?.drawer}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            color: 'black',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
