import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import ListBar from '../../components/molecules/ListBar';
import {
  Fever,
  Pneunomia,
  Stroke,
  Flu,
  Asthma,
  ChestPain,
  Malaria,
  Gerd,
  Diarhea,
  Sepsis,
} from '../../assets/icon';
import {Gap} from '../../components/atoms';

const Sickness = () => {
  return (
    <ScrollView style={styles.bar}>
      <Gap height={33} />
      <ListBar type="left" source={Fever} />
      <Gap height={20} />
      <ListBar type="right" source={Pneunomia} />
      <Gap height={30} />
      <ListBar type="left" source={Stroke} />
      <Gap height={20} />
      <ListBar type="right" source={Flu} />
      <Gap height={30} />
      <ListBar type="left" source={Asthma} />
      <Gap height={20} />
      <ListBar type="right" source={ChestPain} />
      <Gap height={30} />
      <ListBar type="left" source={Malaria} />
      <Gap height={20} />
      <ListBar type="right" source={Gerd} />
      <Gap height={30} />
      <ListBar type="left" source={Sepsis} />
      <Gap height={30} />
      <ListBar type="right" source={Diarhea} />
      <Gap height={30} />
    </ScrollView>
  );
};

export default Sickness;

const styles = StyleSheet.create({});
