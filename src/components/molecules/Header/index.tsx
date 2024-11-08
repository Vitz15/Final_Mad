import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenContainer} from 'react-native-screens';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sign}>
        <Text style={styles.Title}>Sign In</Text>
        <Text style={styles.Title}>Sign Up</Text>
      </View>
      <View style={styles.whiteBar} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#78C194',
    padding: 95,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    elevation: 10,
  },
  whiteBar: {
    backgroundColor: 'white',
    width: 68,
    height: 5,
    borderRadius: 40,
    position: 'absolute',
    marginTop: 235,
    marginLeft: 87,
  },
  sign: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    top: 85,
  },
  Title: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 24,
    textShadowColor: '#585858',
    textShadowOffset: {width: 0, height: 2.5},
    textShadowRadius: 5,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
    margin: 20,
    marginHorizontal: 45,
  },
});
