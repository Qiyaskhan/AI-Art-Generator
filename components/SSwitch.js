import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const CustomSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleSwitch}>
      <View style={[styles.switch, isOn ? styles.switchOn : styles.switchOff]}>
        <View style={[styles.thumb, isOn ? styles.thumbOn : styles.thumbOff]} />
      </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    borderRadius: 20,
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchOn: {
    backgroundColor: 'green',
  },
  switchOff: {
    backgroundColor: 'gray',
  },
  thumb: {
    borderRadius: 50,
    width: 26,
    height: 26,
    backgroundColor: 'white',
  },
  thumbOn: {
    transform: [{ translateX: 17 }],
  },
  thumbOff: {
    transform: [{ translateX: -14 }],
  },
});

export default CustomSwitch;