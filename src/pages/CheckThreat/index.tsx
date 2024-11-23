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
import CustomBottomNav from '../../components/molecules/NavBar';

const Threat = ({navigation}) => {
  const text = 'Subarachnoid \nHemorrhage';

  return (
    <View>
      <Search placeholder="What is your concern? " icon={SearchLogo} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View>
          <Text style={styles.Title}>Try This Prescription</Text>
          <ListBar
            text="High Blood"
            type="left"
            source={High}
            onPress={() => navigation.navigate('HighBloodPres')}
          />
          <ListBar
            text="Blood Sugar"
            type="right"
            source={Sugar}
            onPress={() => navigation.navigate('BloodSugarPres')}
          />
          <ListBar text="Diphteria" type="left" source={Diphteria} />
          <ListBar text="CSF          " type="right" source={CSF} />
          <ListBar text="Asthma" type="left" source={Asthma} />
          <ListBar text="Heart Attack" type="right" source={ChestPain} />
          <ListBar text="Meningtis" type="left" source={Malaria} />
          <ListBar text="Gerd         " type="right" source={Gerd} />
          <ListBar text={text} type="left" source={Sepsis} />
          <ListBar text="Diarhea   " type="right" source={Diarhea} />
          <Gap height={30} />
          <CustomBottomNav
            type="Other"
            onPress2={() => navigation.navigate('Profile')}
          />
        </View>
      </ScrollView>
    </View>
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
    backgroundColor: 'white',
  },
});
