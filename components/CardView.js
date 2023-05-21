import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const CustomView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card1}>
          <View style={styles.cardContent} >
            <Image
              source={require('../Assets/Icons/bgremove.png')}
              style={styles.image}
            />
            <Text style={{ color: 'black', }}>BG remove</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <View style={styles.cardContent} >
            <Image
              source={require('../Assets/Icons/downloadicon.png')}
              style={styles.image}
            />

          </View>
        </View>
        <View style={styles.card2}>
          <View style={styles.cardContent} >
            <Image
              source={require('../Assets/Icons/arrow.png')}
              style={styles.image}
            />

          </View>
        </View>
        <View style={styles.card2}>
          <View style={styles.cardContent} >
            <Image
              source={require('../Assets/Icons/delete.png')}
              style={styles.image}
            />

          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //paddingHorizontal: 10,
  },
  card2: {
    width: '23%',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 10,
    height: '95%',
  },
  cardCover: {
    width: '100%',
    height: 70,
    backgroundColor: '#eee',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  image: {
    margin: 25,
    height: 20,
    width: 20
  },
  card1: {
    width: '28%',
    height: '95%',
    borderRadius: 10,
    backgroundColor: '#fff', 
    elevation: 10, 
  },
});

export default CustomView;