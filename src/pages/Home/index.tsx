// src/pages/Home/index.js
import React from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import Top from '../../components/molecules/Top';
import {Footer, Menu} from '../../components/molecules';
import {MiniBox, Gap} from '../../components/atoms';
import {
  HealthR,
  Virus,
  Trans,
  OrderM,
  Presc,
  Symp,
  About,
} from '../../assets/icon';
import OrderMedicine from '../OrderMedicine';
import NavBar from '../../components/molecules/NavBar';

const Home = ({navigation}: {navigation: any}) => {
  console.log('Home component rendering');

  const handleOrderPress = () => {
    console.log('Navigating to OrderMedicine');
    navigation.navigate('OrderMedicine');
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Top />
        <Gap height={35} />
        <View style={styles.iconContainer}>
          <MiniBox icon={HealthR} onPress={() => {}} />
          <MiniBox icon={Trans} onPress={() => {}} />
          <MiniBox icon={Virus} onPress={() => {}} />
        </View>
        <View style={styles.menuContainer}>
          <Gap height={11} />
          <TouchableOpacity onPress={handleOrderPress}>
            <Menu icon={OrderM} onPress={() => {}} />
          </TouchableOpacity>
          <Gap height={24} />
          <Menu icon={Presc} label="Prescription" onPress={() => {}} />
          <Gap height={24} />
          <Menu icon={Symp} label="Check Your Symptom" onPress={() => {}} />
          <Gap height={24} />
          <Menu icon={About} label="About Us" onPress={() => {}} />
        </View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  scroll: {
    flexGrow: 0,
    maxHeight: '84%',
    backgroundColor: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    backgroundColor: 'white',
  },
});

export default Home;
