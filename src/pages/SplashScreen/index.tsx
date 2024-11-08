import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Azzure} from '../../assets/icon';

const SplashScreen = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('SignIn');
  //   }, 3000);
  // }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assure You to keep Healthy</Text>
      <Azzure/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 24,
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
});
