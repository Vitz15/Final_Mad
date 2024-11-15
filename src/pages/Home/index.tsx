import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Top from '../../components/molecules/Top';
import {Footer, Menu} from '../../components/molecules';
import {MiniBox, Gap} from '../../components/atoms';
import {HealthR, Virus} from '../../assets/icon';
import {Trans} from '../../assets/icon';

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
        <Menu/>
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
