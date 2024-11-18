import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {NavBar} from './src/components/molecules';
import OrderMedicine from './src/pages/OrderMedicine';

const Navbar = () => {
  return <OrderMedicine />;
};

const styles = StyleSheet.create({});

export default Navbar;
