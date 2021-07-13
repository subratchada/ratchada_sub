import React, { Component } from 'react'
import { Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './component/screens/Login';
import Home from './component/screens/Home';
import ListView from './component/screens/ListView';
import Map from './component/screens/Map';
const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: true,}}
      initialRouteName="Home">
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ListView" component={ListView} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
