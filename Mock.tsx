import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {CartProvider} from './src/context/CartContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartPage from './src/pages/Cart';
import ProductListScreen from './src/pages/OrderMedicine';
import CustomBottomNav from './src/components/molecules/NavBar';
import PneunomiaCard from './src/pages/Symptom/Pneunomia';
const Stack = createNativeStackNavigator();

const Mock = () => {
  return (
    <PneunomiaCard />
    //<CustomBottomNav />
    // <NavigationContainer>
    //   <AboutUs />
    //   {/* <CartProvider>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="OrderMedicine"
    //         component={OrderMedicine}
    //         options={{headerShown: false}}
    //       />
    //       <Stack.Screen
    //         name="Cart"
    //         component={CartPage}
    //         options={{headerShown: false}}
    //       />
    //     </Stack.Navigator>
    //   </CartProvider> */}
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Mock;
