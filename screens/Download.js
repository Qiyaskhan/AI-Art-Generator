import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CustomView from '../components/CardView'
import { Button, } from 'react-native-paper';

const Download = () => {
  return (
    <View style={{height:'100%'}}>
      <Text>Download</Text>
      <Image
        source={require('../Assets/Images/Rectangle308.png')}
        style={styles.image}
      />
      <CustomView/>
      <Button mode="contained"
                     onPress={() =>{navigation.navigate('TabNavigator')}}
                    style={styles.btn}>
                    Publish Now
                </Button>
    </View>
  )
}

export default Download

const styles = StyleSheet.create({
    image:{
        justifyContent:'center',
        alignSelf:'center',
        height:'70%',
        width:'84%',
        borderRadius:20
    },
    btn: {
      borderRadius: 10,
      //top: 45,
      width: 320,
      padding: 2.5,
      backgroundColor: '#00ced1',
      alignSelf:'center',
      margin:8
  },
})