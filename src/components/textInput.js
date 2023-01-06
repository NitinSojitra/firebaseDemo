import React from 'react';

import {TextInput} from 'react-native-paper';

const TextInputComp = ({text, setText, label, isBool}) => (
  <TextInput
    label={label}
    value={text}
    cursorColor={'#000'}
    selectionColor={'#000'}
    textColor={'#000'}
    maxLength={isBool ? 6 : 100}
    secureTextEntry={isBool ? true : false}
    activeUnderlineColor={'#494949'}
    style={{
      marginTop: 20,
      marginHorizontal: 15,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      height: 50,
    }}
    onChangeText={text => setText(text)}
  />
);

export default TextInputComp;
