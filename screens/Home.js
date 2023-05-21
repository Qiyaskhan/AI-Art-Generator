import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import TextInput from '../components/TextInput'
import Cards from '../components/Cards'
import { Button, } from 'react-native-paper';
// import ButtomSheetModal from '../components/ButtomSheetModal';
const Home = () => {
  return (
    <View style={styles.v1}>
      <View style={styles.v2}>
      <Text style={styles.header}>Muhammad Inam</Text>
        <Image source={require('../Assets/Icons/headericon.png')}
          style={styles.headericon}></Image>
      </View>
      <TextInput/>

      <Cards/>
      <Button mode="contained"
                   
                    style={styles.btn}>
                    Generate
                </Button>
    </View>
  )
}
export default Home
const styles = StyleSheet.create({
  v1: {
   height:'100%'
  },
  headericon: {
    
   
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
  btn: {
    borderRadius: 5,
    top: 45,
    width: 320,
    padding: 2.5,
    backgroundColor: '#00ced1',
    alignSelf:'center'
},
})