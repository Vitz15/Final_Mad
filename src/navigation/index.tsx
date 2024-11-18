import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Sickness from '../pages/CheckSickness';
import Threat from '../pages/CheckThreat';
import OrderMedicine from '../pages/OrderMedicine';
import Cart from '../pages/Cart';
import Virus from '../pages/VirusList';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sickness"
        component={Sickness}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Threat"
        component={Threat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderMedicine"
        component={OrderMedicine}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Virus"
        component={Virus}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
