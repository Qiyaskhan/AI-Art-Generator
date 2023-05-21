import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, } from 'react-native-paper';
const ModelButton = () => {
  return (
    <View>
      <View style={{flexDirection:'row',alignSelf:'center',padding:10}}>
        <Button mode="contained"
          style={styles.btn}
          labelStyle={{ color: 'black' }}>
         Trending
        </Button>
        <Button mode="contained"
          style={styles.btn1}
          labelStyle={{ color: 'black' }}>
         New
        </Button>
        <Button mode="contained"
          style={styles.btn2}
          labelStyle={{ color: 'black' }}>
          Follows
        </Button>
      </View>
    </View>
  )
}

export default ModelButton

const styles = StyleSheet.create({
  btn: {
   margin:5,
   backgroundColor: '#7fffd4',
},
btn1: {
  margin:5,
  backgroundColor:'white',
},
btn2: {
  margin:5,
  backgroundColor:'white'
},
})