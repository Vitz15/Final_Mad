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
import CustomBottomNav from '../../components/molecules/NavBar';

const Sickness = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.anjay}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Search placeholder="Find Your Symptom" icon={SearchLogo} />
        <Text style={styles.Title}>Where does it hurt You?</Text>
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
      <CustomBottomNav
        type="Other"
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
        onPress={() => navigation.navigate('Home', {uid: uid})}
      />
    </View>
  );
};

export default Sickness;

const styles = StyleSheet.create({
  anjay: {
    backgroundColor: 'white',
  },
  Title: {
    textAlign: 'center',
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 24,
    color: 'black',
    marginTop: 24,
  },
  container: {
    backgroundColor: 'white',
    flexGrow: 0,
    maxHeight: '93%',
  },
});
