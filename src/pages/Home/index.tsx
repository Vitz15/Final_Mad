import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Top from '../../components/molecules/Top';
import {Footer, Menu} from '../../components/molecules';
import {MiniBox, Gap} from '../../components/atoms';
import {HealthR, Virus} from '../../assets/icon';
import {Trans} from '../../assets/icon';
import {OrderM} from '../../assets/icon';
import {Presc} from '../../assets/icon';
import {Symp} from '../../assets/icon';
import {About} from '../../assets/icon';
import OrderMedicine from '../OrderMedicine';

const Home = ({navigation}) => {
  return (
    <View>
      <Top />
      <Gap height={35} />
      <View style={styles.container}>
        <MiniBox icon={HealthR} />
        <MiniBox icon={Trans} />
        <MiniBox icon={Virus} />
      </View>
      <View style={styles.menuContainer}>
        <Gap height={11} />
        <Menu icon={OrderM} />
        <Gap height={24} />
        <Menu icon={Presc} label='Prescription'  />
        <Gap height={24} />
        <Menu icon={Symp} label='Check Your Symptom' />
        <Gap height={24} />
        <Menu icon={About} label='About Us' />
      </View>
      <Footer />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
