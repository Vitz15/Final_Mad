import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Top from '../../components/molecules/Top';
import {Menu} from '../../components/molecules';
import {MiniBox, Gap} from '../../components/atoms';
import {HealthR, Virus} from '../../assets/icon';
import {Trans} from '../../assets/icon';
import {OrderM} from '../../assets/icon';
import {Presc} from '../../assets/icon';
import {Symp} from '../../assets/icon';
import {About} from '../../assets/icon';
import {getDatabase, ref, onValue} from 'firebase/database';
import CustomBottomNav from '../../components/molecules/NavBar';

const Home = ({navigation}) => {
  const handleOrderPress = () => {
    navigation.navigate('OrderMedicine'); // Pindah ke halaman OrderMedicinePage
  };
  return (
    <View style={styles.page}>
      <Top />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.Scroll}>
        <Gap height={35} />
        <View style={styles.iconContainer}>
          <MiniBox
            text="Health Routine"
            icon={HealthR}
            onPress={() => navigation.navigate('HealthRoutine')}
          />
          <MiniBox text="Transaction" icon={Trans} />
          <MiniBox
            text="Virus List"
            icon={Virus}
            onPress={() => navigation.navigate('Virus')}
          />
        </View>
        <View style={styles.menuContainer}>
          <Gap height={11} />

          <Menu
            icon={OrderM}
            onPress={() => navigation.navigate('OrderMedicine')}
          />
          <Gap height={24} />
          <Menu
            icon={Presc}
            label="Prescription"
            onPress={() => navigation.navigate('Threat')}
          />
          <Gap height={24} />
          <Menu
            icon={Symp}
            label="Check Your Symptom"
            onPress={() => navigation.navigate('Sickness')}
          />
          <Gap height={24} />
          <Menu
            icon={About}
            label="About Us"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </ScrollView>
      <CustomBottomNav
        type="Home"
        onPress2={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flexGrow: 0,
    maxHeight: '70%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  menuContainer: {
    backgroundColor: 'white',
  },
});

export default Home;
