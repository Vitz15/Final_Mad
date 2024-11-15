import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Search from '../../components/molecules/Search';
import MedicationCard from '../../components/molecules/MedicineCard';
import {Gap, Button} from '../../components/atoms';
import {SearchLogo} from '../../assets/icon';
import {
  Penicilin,
  Amlodipine,
  Amoxan,
  Aspirin,
  Loperamide,
  Metformin,
  Paracetamol,
  Paramex,
} from '../../assets/icon';

import React from 'react';

const OrderMedicine = () => {
  return (
    <View>
      <Search placeholder="Find Your Medicine? " icon={SearchLogo} />
      <Gap height={30} />
      <ScrollView style={styles.medicationScroll}>
        <MedicationCard source={Penicilin} name="Penicilin" />
        <MedicationCard source={Amlodipine} name="Amlodipine" />
        <MedicationCard source={Amoxan} name="Amoxan" />
        <MedicationCard source={Aspirin} name="Aspirin" />
        <MedicationCard source={Loperamide} name="Loperamide" />
        <MedicationCard source={Metformin} name="Metformin" />
        <MedicationCard source={Paracetamol} name="Paracetamol" />
        <MedicationCard source={Paramex} name="Paramex" />
      </ScrollView>
      <Gap height={30} />
      <Button text="Add To Cart" type="normal" style={styles.button} />
    </View>
  );
};

export default OrderMedicine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContent: {
    paddingBottom: 20, 
  },
  medicationScroll: {
    flexGrow: 0, 
    maxHeight: '71%', 
  },
});
