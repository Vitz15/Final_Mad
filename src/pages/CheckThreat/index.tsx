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
  const text = 'Subarachnoid \nHemorrhage';

  return (
    <ScrollView>
      <Search placeholder="What is your concern? " icon={SearchLogo} />
      <View>
        <Gap height={33} />
        <ListBar text="High Blood" type="left" source={High} />
        <ListBar text="Blood Sugar" type="right" source={Sugar} />
        <ListBar text="Diphteria" type="left" source={Diphteria} />
        <ListBar text="CSF          " type="right" source={CSF} />
        <ListBar text="Asthma" type="left" source={Asthma} />
        <ListBar text="Heart Attack" type="right" source={ChestPain} />
        <ListBar text="Meningtis" type="left" source={Malaria} />
        <ListBar text="Gerd         " type="right" source={Gerd} />
        <ListBar text={text} type="left" source={Sepsis} />
        <ListBar text="Diarhea   " type="right" source={Diarhea} />
        <Gap height={30} />
      </View>
    </ScrollView>
  );
};

export default Threat;

const styles = StyleSheet.create({});
