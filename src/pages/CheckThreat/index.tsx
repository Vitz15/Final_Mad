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
    <ScrollView style={styles.container}>
      <Search placeholder="What is your concern? " icon={SearchLogo} />
      <View>
        <Text style={styles.Title}>Try This Prescription</Text>
        <ListBar text="High Blood" type="left" source={High} />
        <Gap height={20} />
        <ListBar text="Blood Sugar" type="right" source={Sugar} />
        <ListBar text="Diphteria" type="left" source={Diphteria} />
        <Gap height={20} />
        <ListBar text="CSF          " type="right" source={CSF} />
        <ListBar text="Asthma" type="left" source={Asthma} />
        <Gap height={20} />
        <ListBar text="Heart Attack" type="right" source={ChestPain} />
        <ListBar text="Meningtis" type="left" source={Malaria} />
        <Gap height={20} />
        <ListBar text="Gerd         " type="right" source={Gerd} />
        <ListBar text={text} type="left" source={Sepsis} />
        <Gap height={30} />
        <ListBar text="Diarhea   " type="right" source={Diarhea} />
        <Gap height={30} />
      </View>
    </ScrollView>
  );
};

export default Threat;

const styles = StyleSheet.create({
  Title: {
    textAlign: 'center',
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 24,
    color: 'black',
    marginTop: 24,
  },
  container: {
    backgroundColor: 'white'
  }
});
