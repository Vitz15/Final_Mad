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
import HealthRoutine from '../pages/HealthRoutine';
import HighBloodPressureCard from '../pages/Prescription/HighBlood';
import BloodSugarPres from '../pages/Prescription/BloodSugar';
import FlashMessage from 'react-native-flash-message';
import Diptheria from '../pages/Prescription/Diptheria';
import AsthmaPres from '../pages/Prescription/Asthma';
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
          name="HealthRoutine"
          component={HealthRoutine}
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
        <Stack.Screen
          name="HighBloodPres"
          component={HighBloodPressureCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BloodSugarPres"
          component={BloodSugarPres}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Diptheria"
          component={Diptheria}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AsthmaPres"
          component={AsthmaPres}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </CartProvider>
  );
};

export default Navigator;
