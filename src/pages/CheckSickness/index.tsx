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

const Sickness = () => {
  return (
    <ScrollView style={styles.container}>
      <Search placeholder="Find Your Symptom" icon={SearchLogo} />
      <View>
        <ListBar text="Fever" type="left" source={Fever} />
        <ListBar text="Pneunomia" type="right" source={Pneunomia} />

        <ListBar text="Stroke" type="left" source={Stroke} />
        <ListBar text="Influenza" type="right" source={Flu} />

        <ListBar text="Asthma" type="left" source={Asthma} />
        <ListBar text="Chest Pain  " type="right" source={ChestPain} />

        <ListBar text="Malaria" type="left" source={Malaria} />
        <ListBar text="Gerd         " type="right" source={Gerd} />
        <ListBar text="Sepsis" type="left" source={Sepsis} />
        <ListBar text="Diarhea    " type="right" source={Diarhea} />
      </View>
    </ScrollView>
  );
};

export default Sickness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8EF',
  },
});
