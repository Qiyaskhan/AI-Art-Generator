import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';

const IMAGES = [
  require('../Assets/Images/Rectangle308.png'),
  require('../Assets/Images/Rectangle310.png'),
  require('../Assets/Images/Rectangle311.png'),
  require('../Assets/Images/Rectangle308.png'),
  require('../Assets/Images/Rectangle310.png'),
  require('../Assets/Images/Rectangle311.png'),
  require('../Assets/Images/Rectangle310.png'),
  require('../Assets/Images/Rectangle308.png'),
];

const TwoImagesRow = ({ image1, image2 }) => {
  return (
    <View style={styles.row}>
      <Image source={image1} style={styles.image} />
      <Image source={image2} style={styles.image} />
    </View>
  );
};

const TwoImagesScrollView = () => {
  return (
    <ScrollView>
      {IMAGES.map((image, index) => {
        if (index % 2 === 0) {
          return (
            <TwoImagesRow key={index} image1={image} image2={IMAGES[index + 1]} />
          );
        }
        return null;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  image: {
    width: '49%',
    height: 200,
  },
});

export default TwoImagesScrollView;