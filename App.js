/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const Stack = createStackNavigator();


const App  = () => {
 return (
<NavigationContainer>
     <Stack.Navigator screenOptions={{header: ()=> null}}>
        <Stack.Screen name="SignIn" component={SignIn} /> 
        <Stack.Screen name="SignUp" component={SignUp} /> 


      </Stack.Navigator>
</NavigationContainer>
 )
};

// const styles = StyleSheet.create({

// });

export default App;
