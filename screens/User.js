import { StyleSheet, Text, View, ScrollView,Image } from 'react-native'
import React from 'react';
import { Button } from 'react-native-paper';
import NotificationCard from '../components/NotificationCards';
import Buttons from '../components/Buttons';
import UserImages from '../components/UserImages'
const User = () => {
  return (
    <View style={{ height: '100%' }}>
      {/* <ScrollView>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </ScrollView> */}
      <View style={styles.v1}>
      <Image source={require('../Assets/Icons/notification.png')}
          style={styles.Notification}></Image>
           <Image source={require('../Assets/Images/fashionboy.png')}
          style={styles.profile}></Image>
           <Image source={require('../Assets/Icons/setting.png')}
          style={styles.setting}></Image>
      </View>
      <View><Text style={{color:'black',alignSelf:'center',fontSize:20}}>Ai Art Generator</Text>
      <Text style={{color:'black',alignSelf:'center'}}>lets begin the fight</Text>
      <View style={{flexDirection:'row',alignSelf:'center',padding:10}}>
      <Text style={{color:'black',alignSelf:'center',margin:5,fontSize:20}}>12.2K{'\n'}Follower</Text>
      <Text style={{color:'black',alignSelf:'flex-end',fontSize:30}}>|</Text>
      <Text style={{color:'black',alignSelf:'center',margin:5,fontSize:20}}>3K{'\n'}Posts</Text>
      </View>
      <View>
      <Buttons/>
      </View>
      <UserImages/>
      </View>

   
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  v1:{
flexDirection:'row',
justifyContent:'space-between',
margin:10,
  },

  Notification:{
    width:25,
    height:25,
    margin:5,
  },
  profile:{
    borderRadius:100,
    width:100,
    height:100,
  },
  setting:{
    width:25,
    height:25
  }
})