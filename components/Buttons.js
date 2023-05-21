import React, { useState } from 'react';
import { Button, View } from 'react-native';

const ToggleColorButtons = () => {
  const [isButton1Active, setIsButton1Active] = useState(true);

  const handleButton1Press = () => {
    setIsButton1Active(true);
  };

  const handleButton2Press = () => {
    setIsButton1Active(false);
  };

  return (
    <View style={{
      flexDirection: 'row',
      borderRadius: 15,
      overflow: 'hidden',
      marginVertical: 13,
      width:'90%',
      alignSelf:'center'
    }}>
      <View style={{ flex: 1, marginRight: -1 }}>
        <Button
          title="All Artworks"
          color={isButton1Active ? '#00ced1' : 'gray'}
          onPress={handleButton1Press}
          style={{ flex: 1, color: isButton1Active ? 'white' : 'black', backgroundColor: 'transparent' }}
          titleStyle={{ color: 'black' }}
        />
      </View>
      <View style={{ flex: 1, marginLeft: -1 }}>
        <Button
          title="Published Art"
          color={!isButton1Active ? '#00ced1' : 'gray'}
          onPress={handleButton2Press}
          style={{ flex: 1, color: !isButton1Active ? 'white' : 'black', backgroundColor: 'transparent' }}
          titleStyle={{ color: 'black' }}
        />
      </View>
    </View>
  );
};

export default ToggleColorButtons;