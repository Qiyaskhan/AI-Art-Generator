import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Cards = () => {
  return (
    <View>
      <View style={styles.container}>
          
          <View>
            <TouchableOpacity>
            <Image source={require('../Assets/Images/Model1.png')}
          style={styles.headericon}></Image>
            </TouchableOpacity>
          </View>
          <View><TouchableOpacity>
          <Image source={require('../Assets/Images/Model2.png')}
          style={styles.headericon}></Image>
          </TouchableOpacity>
            </View>
            <View><TouchableOpacity>
          <Image source={require('../Assets/Images/Model3.png')}
          style={styles.headericon}></Image>
          </TouchableOpacity>
            </View>
        </View>
        <View style={styles.container}>
          
          <View>
            <TouchableOpacity>
            <Image source={require('../Assets/Images/Model11.png')}
          style={styles.headericon}></Image>
            </TouchableOpacity>
          </View>
          <View><TouchableOpacity>
          <Image source={require('../Assets/Images/Model12.png')}
          style={styles.headericon}></Image>
          </TouchableOpacity>
            </View>
            <View><TouchableOpacity>
          <Image source={require('../Assets/Images/Model13.png')}
          style={styles.headericon}></Image>
          </TouchableOpacity>
            </View>
        </View>
        <View style={styles.container}>
          
          <View>
            <TouchableOpacity>
            <Image source={require('../Assets/Images/Model14.png')}
          style={styles.headericon}></Image>
            </TouchableOpacity>
          </View>
          <View><TouchableOpacity>
          <Image source={require('../Assets/Images/Model15.png')}
          style={styles.headericon}></Image>
          </TouchableOpacity>
            </View>
            <View><TouchableOpacity>
          <Image source={require('../Assets/Images/Model14.png')}
          style={styles.headericon}></Image>
          </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Cards

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