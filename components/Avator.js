import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Avator = () => {
  return (
    <View>
    <View style={styles.container}>
        
        <View>
          <TouchableOpacity>
          <Image source={require('../Assets/Avator/Avator1.png')}
        style={styles.headericon}></Image>
          </TouchableOpacity>
        </View>
        <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator2.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
          <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator3.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
      </View>
      <View style={styles.container}>
        
        <View>
          <TouchableOpacity>
          <Image source={require('../Assets/Avator/Avator4.png')}
        style={styles.headericon}></Image>
          </TouchableOpacity>
        </View>
        <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator5.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
          <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator6.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
      </View>
      <View style={styles.container}>
        
        <View>
          <TouchableOpacity>
          <Image source={require('../Assets/Avator/Avator7.png')}
        style={styles.headericon}></Image>
          </TouchableOpacity>
        </View>
        <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator8.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
          <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator9.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
          
      </View>
      <View style={styles.container}>
        
        <View>
          <TouchableOpacity>
          <Image source={require('../Assets/Avator/Avator10.png')}
        style={styles.headericon}></Image>
          </TouchableOpacity>
        </View>
        <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator11.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
          <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator12.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
      </View>
      <View style={styles.container}>
        
        <View>
          <TouchableOpacity>
          <Image source={require('../Assets/Avator/Avator13.png')}
        style={styles.headericon}></Image>
          </TouchableOpacity>
        </View>
        <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator14.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
          <View><TouchableOpacity>
        <Image source={require('../Assets/Avator/Avator15.png')}
        style={styles.headericon}></Image>
        </TouchableOpacity>
          </View>
      </View>
  </View>
  )
}

export default Avator

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignContent:'space-around',
        justifyContent:'space-evenly',
        //margin:5
        top:15,
        padding:5
    },
    
})