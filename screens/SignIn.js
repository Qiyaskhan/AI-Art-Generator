import { StyleSheet, Text, View ,Image,TextInput} from 'react-native'
import { Button, } from 'react-native-paper';
import React, { useState } from 'react'

const SignIn = ({navigation}) => {
    const [text, setText] = useState('');
  return (
    <View style={{height:'100%',backgroundColor:'white'}}>
     <Image source={require('../Assets/Images/Ailogo.png')}
          style={styles.headericon}></Image>
          <TextInput
          placeholder={'Enter Username'}
          style={styles.input}
          autoCorrect={false}
          placeholderTextColor="gray"
          Value={text}
          onChangeText={(actualData) => setText(actualData)} />
          <TextInput
          placeholder={'Enter Tagline'}
          style={styles.input}
          autoCorrect={false}
          placeholderTextColor="gray"
          Value={text}
          onChangeText={(actualData) => setText(actualData)} />
          <Button mode="contained"
                     onPress={() =>{navigation.navigate('TabNavigator')}}
                    style={styles.btn}>
                    Get Started
                </Button>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    btn: {
        borderRadius: 10,
        //top: 45,
        width: 320,
        padding: 2.5,
        backgroundColor: '#00ced1',
        alignSelf:'center',
        margin:8
    },
    headericon:{
        height:'70%',
        top:70
     
    },
    input: {
        width: 320,
        height:50,
        borderColor: 'gray',
        backgroundColor: '#dcdcdc',
        alignSelf:'center',
        margin:5,
        borderRadius:10
      },
})