import {ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScreenContainer} from 'react-native-screens';
import { Button } from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <View style={styles.sign}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.Title}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.Title}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#D4D4D4',
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
