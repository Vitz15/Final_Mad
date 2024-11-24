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
          <ListBar
            text="Fever"
            type="left"
            source={Fever}
            onPress={() => navigation.navigate('FeverCard', {uid: uid})}
          />
          <ListBar
            text="Pneunomia"
            type="right"
            source={Pneunomia}
            onPress={() => navigation.navigate('PneunomiaCard', {uid: uid})}
          />

          <ListBar
            text="Stroke"
            type="left"
            source={Stroke}
            onPress={() => navigation.navigate('StrokeCard', {uid: uid})}
          />
          <ListBar
            text="Influenza"
            type="right"
            source={Flu}
            onPress={() => navigation.navigate('InfluenzaCard', {uid: uid})}
          />

          <ListBar
            text="Asthma"
            type="left"
            source={Asthma}
            onPress={() => navigation.navigate('AsthmaCard', {uid: uid})}
          />
          <ListBar
            text="Chest Pain  "
            type="right"
            source={ChestPain}
            onPress={() => navigation.navigate('ChestPainCard', {uid: uid})}
          />

          <ListBar text="Malaria" type="left" source={Malaria} />
          <ListBar
            text="Gerd         "
            type="right"
            source={Gerd}
            onPress={() => navigation.navigate('GerdCard', {uid: uid})}
          />
          <ListBar text="Sepsis" type="left" source={Sepsis} />
          <ListBar
            text="Diarhea    "
            type="right"
            source={Diarhea}
            onPress={() => navigation.navigate('DiarheaCard', {uid: uid})}
          />
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
    maxHeight: '92.5%',
  },
});
