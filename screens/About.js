import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import ModelButton from '../components/ModelButton'
import UserImages from '../components/UserImages'
const About = () => {
  return (
    <View style={styles.v1}>
      <View style={styles.v2}>
      <Text style={styles.header}>Muhammad Inam</Text>
        <Image source={require('../Assets/Icons/headericon.png')}
          style={styles.headericon}></Image>
      </View>
      <ModelButton/>
      <UserImages/>
    </View>
  )
}
export default About

const styles = StyleSheet.create({
  v1: {
    height: '100%'
  },
  v2:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  header:{
    color:'black',
    fontWeight:'bold',
    fontSize:20,
    margin:10
  },
})