import * as React from 'react';
import { View, Text, Button, StatusBar, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';



const App = () =>{
  return(
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};


export default App;