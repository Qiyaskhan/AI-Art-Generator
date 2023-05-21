import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avator from '../components/Avator'
import { Button, } from 'react-native-paper';

const Creater = ({navigation}) => {
  return (
    <View>
        <Text style={styles.txt}>Select Your Creater</Text>
      <Avator/>
      <Button mode="contained"
                     onPress={() =>{navigation.navigate('SignIn')}}
                    style={styles.btn}>
                Next
                </Button>
    </View>
  )
}

export default Creater

const styles = StyleSheet.create({
    btn: {
        borderRadius: 10,
        //top: 45,
        width: 320,
        padding: 2.5,
        backgroundColor: '#00ced1',
        alignSelf:'center',
        margin:25
    },
    txt:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        margin:5
    }
})