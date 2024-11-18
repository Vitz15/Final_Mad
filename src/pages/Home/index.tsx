import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
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
  const handleOrderPress = () => {
    navigation.navigate('OrderMedicine'); // Pindah ke halaman OrderMedicinePage
  };
  return (
    <View>
      <Top />
      <ScrollView style={styles.Scroll}>
        <Gap height={35} />
        <View style={styles.iconContainer}>
          <MiniBox text="Health Routine" icon={HealthR} />
          <MiniBox text="Transaction" icon={Trans} />
          <MiniBox
            text="Virus List"
            icon={Virus}
            onPress={() => navigation.navigate('Virus')}
          />
        </View>
        <View style={styles.menuContainer}>
          <Gap height={11} />
          <TouchableOpacity onPress={handleOrderPress}>
            <Menu icon={OrderM} />
          </TouchableOpacity>
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Scroll: {
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
