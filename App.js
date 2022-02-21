import react from 'react'
import React from 'react'
import {View, Text} from 'react-native'

import HomeScreen from './screens/Home'
import ISSTRACKER from './screens/ISStracker'
import METEOR from './screens/Meteor'

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import { NavigationContainer } from '@react-navigation/native'

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name = "Home" component={HomeScreen}></Stack.Screen>
              <Stack.Screen name =  "ISS" component={ISSTRACKER}></Stack.Screen>
              <Stack.Screen name = "Meteor" component={METEOR}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}