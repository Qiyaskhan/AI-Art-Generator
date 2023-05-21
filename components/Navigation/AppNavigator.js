import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from "../../screens/SignIn";
import TabNavigator from './TabNavigator';
import Creater from '../../screens/Creater';
import Splash from '../../screens/Splash';
import Download from '../../screens/Download'
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SignIn'>
    <Stack.Screen name="TabNavigator" component={TabNavigator}  options={{ headerShown: false }}/>
      <Stack.Screen name="SignIn" component={SignIn}  options={{ headerShown: false }}/>
      <Stack.Screen name="Splash" component={Splash}  options={{ headerShown: false }}/>
      <Stack.Screen name="Creater" component={Creater}  options={{ headerShown: false }}/>
      <Stack.Screen name="Download" component={Download}  options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default  AppNavigator;