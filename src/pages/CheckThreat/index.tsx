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

const Threat = ({navigation, route}) => {
  const {uid} = route.params;

  const text = 'Subarachnoid \nHemorrhage';

  return (
    <View style={styles.anjay}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Search placeholder="What is your concern? " icon={SearchLogo} />
        <View>
          <Text style={styles.Title}>Try This Prescription</Text>
          <ListBar
            text="High Blood"
            type="left"
            source={High}
            onPress={() => navigation.navigate('HighBloodPres', {uid: uid})}
          />
          <ListBar
            text="Blood Sugar"
            type="right"
            source={Sugar}
            onPress={() => navigation.navigate('BloodSugarPres', {uid: uid})}
          />
          <ListBar
            text="Diphteria"
            type="left"
            source={Diphteria}
            onPress={() => navigation.navigate('Diptheria', {uid: uid})}
          />
          <ListBar
            text="CSF          "
            type="right"
            source={CSF}
            onPress={() => navigation.navigate('CSFPres', {uid: uid})}
          />
          <ListBar
            text="Asthma"
            type="left"
            source={Asthma}
            onPress={() => navigation.navigate('AsthmaPres', {uid: uid})}
          />
          <ListBar
            text="Heart Attack"
            type="right"
            source={ChestPain}
            onPress={() => navigation.navigate('HeartAttackPres', {uid: uid})}
          />
          <ListBar
            text="Meningtis"
            type="left"
            source={Malaria}
            onPress={() => navigation.navigate('MeningitisPres', {uid: uid})}
          />
          <ListBar
            text="Gerd         "
            type="right"
            source={Gerd}
            onPress={() => navigation.navigate('GerdPres', {uid: uid})}
          />
          <ListBar
            text={text}
            type="left"
            source={Sepsis}
            onPress={() => navigation.navigate('HemorrhagePres', {uid: uid})}
          />
          <ListBar
            text="Diarhea   "
            type="right"
            source={Diarhea}
            onPress={() => navigation.navigate('DiarrheaPres', {uid: uid})}
          />
          <Gap height={30} />
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

export default Threat;

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
