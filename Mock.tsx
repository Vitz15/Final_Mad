import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Sickness from './src/pages/CheckSickness';
import Search from './src/components/molecules/Search';
import MedicationCard from './src/components/molecules/MedicineCard';
import {
  Penicilin,
  Amlodipine,
  Amoxan,
  Aspirin,
  Loperamide,
  Metformin,
  Paracetamol,
  Paramex,
} from './src/assets/icon';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/pages/Home';
import Threat from './src/pages/CheckThreat';
import OrderMedicine from './src/pages/OrderMedicine';
import Profile from './src/pages/Profile';
import Virus from './src/pages/VirusList';


const Mock = () => {
  return (
    <View>
      <Threat />
    </View>
  );
};

export default Mock;
