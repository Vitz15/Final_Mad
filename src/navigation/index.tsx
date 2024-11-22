import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Sickness from '../pages/CheckSickness';
import Threat from '../pages/CheckThreat';
import Virus from '../pages/VirusList';
import CartPage from '../pages/Cart';
import CustomBottomNav from '../components/molecules/NavBar';
import ProductListScreen from '../pages/OrderMedicine';
import {CartProvider} from '../context/CartContext';
import AboutUs from '../pages/AboutUs';
import Profile from '../pages/Profile';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <CartProvider>
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
          component={ProductListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Virus"
          component={Virus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={AboutUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </CartProvider>
  );
};

export default Navigator;
