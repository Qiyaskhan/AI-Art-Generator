import { StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React, { useState } from 'react'

const TextInputs = () => {
  const [text, setText] = useState('');
  const handleChangeText = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.prompt}>
    <TextInput
          placeholder={'Enter Your prompt Here'}
          style={styles.input}
          autoCorrect={false}
          placeholderTextColor="gray"
          Value={text}
          onChangeText={(actualData) => setText(actualData)} />
          <Image source={require('../Assets/Icons/prompt.png')}
          style={styles.headericon}></Image>
          </View>
  )
}

const styles = StyleSheet.create({
    input: {
        width: 290,
        height: 76,
        borderColor: 'gray',
        backgroundColor: '#dcdcdc',
      },
      prompt:{
        flexDirection:'row',
        margin:5
      }
});

export default TextInputs;