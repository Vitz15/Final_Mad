import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ListBar from '../../components/molecules/ListBar';
import Search from '../../components/molecules/Search';
import {
  High,
  Sugar,
  Diphteria,
  CSF,
  Asthma,
  ChestPain,
  Malaria,
  Gerd,
  Diarhea,
  Sepsis,
  SearchLogo,
} from '../../assets/icon';
import {Gap} from '../../components/atoms';

const Threat = () => {
  return (
    <ScrollView>
      <Search placeholder="What is your concern? " icon={SearchLogo} />
      <View>
        <Gap height={33} />
        <ListBar text="High Blood" type="left" source={High} />
        <Gap height={20} />
        <ListBar type="right" source={Sugar} />
        <Gap height={30} />
        <ListBar text="Diphteria" type="left" source={Diphteria} />
        <Gap height={20} />
        <ListBar type="right" source={CSF} />
        <Gap height={30} />
        <ListBar text="Asthma" type="left" source={Asthma} />
        <Gap height={20} />
        <ListBar type="right" source={ChestPain} />
        <Gap height={30} />
        <ListBar text="Malaria" type="left" source={Malaria} />
        <Gap height={20} />
        <ListBar type="right" source={Gerd} />
        <Gap height={30} />
        <ListBar text="Sepsis" type="left" source={Sepsis} />
        <Gap height={30} />
        <ListBar type="right" source={Diarhea} />
        <Gap height={30} />
      </View>
    </ScrollView>
  );
};

export default Threat;

const styles = StyleSheet.create({});
