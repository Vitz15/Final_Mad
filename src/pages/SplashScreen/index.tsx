import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3500);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/icon/logo.json')}
        style={{width: 300, height: 300}}
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78C194',
    justifyContent: 'center',
    alignItems: 'center',

  },
  motto: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 24,
    color: 'lightblue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
