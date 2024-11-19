import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {NavBar} from './src/components/molecules';
import OrderMedicine from './src/pages/OrderMedicine';
import {CartProvider} from './src/context/CartContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartPage from './src/pages/Cart';
import Profile from './src/pages/Profile';
import Sickness from './src/pages/CheckSickness';
import Home from './src/pages/Home';
const Stack = createNativeStackNavigator();

const Mock = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="OrderMedicine"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={CartPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Mock;
