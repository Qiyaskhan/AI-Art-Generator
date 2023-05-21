import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImagesPath from '../../Constant/ImagesPath';
import {

  Image,
  StyleSheet
} from 'react-native';
import Home from '../../screens/Home';
import User from '../../screens/User';
import About from '../../screens/About';
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
        tabBarStyle:{backgroundColor:'#00ced1',
      height:70,}
      }}
  

    >
      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown:false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={ImagesPath.Menu}
                style={styles.Search} />
            )
          }
        }} />
        <Tab.Screen name="About" component={About}
        options={{
          headerShown:false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={ImagesPath.Home}
                style={styles.home} />
            )
          }
        }} />
        
      <Tab.Screen name="Notification" component={User}
        options={{
          headerShown:false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={ImagesPath.User}
                style={styles.home} />
            )
          }
        }} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  Search: {
    width: 25,
    height: 25,
  

  },
  home: {
    width: 25,
    height: 25,


  },
})
export default MyTabs