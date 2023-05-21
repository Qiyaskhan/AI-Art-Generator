import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/Images/splash.png')}
        style={styles.image}
      />
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>App Name</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '52%',
    height: '26%',
    resizeMode: 'contain',
    borderRadius: 100
  },
});
