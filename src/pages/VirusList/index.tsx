import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ListBar from '../../components/molecules/ListBar';
import Search from '../../components/molecules/Search';
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
  SearchLogo,
} from '../../assets/icon';
import {Gap} from '../../components/atoms';

const Virus = () => {
  return (
    <ScrollView>
      <Search placeholder="Find Your Symptom" icon={SearchLogo} />
      <View>
        <Gap height={33} />
        <ListBar text="Fever" type="left" source={Fever} />
        <Gap height={20} />
        <ListBar type="right" source={Pneunomia} />
        <ListBar text="Fever" type="left" source={Stroke} />
        <Gap height={20} />
        <ListBar type="right" source={Flu} />
        <ListBar text="Fever" type="left" source={Asthma} />
        <Gap height={20} />
        <ListBar type="right" source={ChestPain} />
        <ListBar text="Fever" type="left" source={Malaria} />
        <Gap height={20} />
        <ListBar type="right" source={Gerd} />
        <ListBar text="Fever" type="left" source={Sepsis} />
        <Gap height={30} />
        <ListBar type="right" source={Diarhea} />
        <Gap height={30} />
      </View>
    </ScrollView>
  );
};

export default Virus;
