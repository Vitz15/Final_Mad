import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation';
import Profile from './src/pages/Profile';

const App = () => {
  return (
    <NavigationContainer>
      <Profile/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
