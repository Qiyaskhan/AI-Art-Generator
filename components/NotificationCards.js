import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


const NotificationCard = ({ title, message }) => {
  return (
    <View style={styles.container}>
        <Image source={require('../Assets/Avator/Avator1.png')}
          style={styles.user}></Image>
          <View style={{justifyContent:'center'}}>
      <Text style={styles.title}>Qiyas</Text>
      <Text style={styles.paraghraph}>commented on your photo</Text></View>
      <Image source={require('../Assets/Icons/heart.png')}
          style={styles.icon}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    justifyContent:'space-between',
    flexDirection:'row',
    width:'100%',
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:10,
    margin:5,
    color:'black',
    justifyContent:'center',

  },
  user:{
    height:80,
    width:80
  },
  icon:{
    height:40,
    width:40,
    margin:30
  },
  paraghraph:{
    color:'black',
    marginBottom:10
  }
});

export default NotificationCard;