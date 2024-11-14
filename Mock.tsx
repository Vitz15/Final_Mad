import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sickness from './src/pages/CheckSickness';
import Search from './src/components/molecules/Search';
import MedicationCard from './src/components/molecules/MedicineCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Mock = () => {
  return (
    <View>
      <MedicationCard/>
    </View>
  );
};

export default Mock;
