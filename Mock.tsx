import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sickness from './src/pages/CheckSickness';
import Search from './src/components/molecules/Search';
import MedicationCard from './src/components/molecules/MedicineCard';
import {Fever, Penicilin} from './src/assets/icon';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/pages/Home';
import Threat from './src/pages/CheckThreat';

const Mock = () => {
  return (
    <View>
      <MedicationCard source={Penicilin} />
      <MedicationCard source={Penicilin} />
      <MedicationCard source={Penicilin} />
      <MedicationCard source={Penicilin} />
    </View>
  );
};

export default Mock;
