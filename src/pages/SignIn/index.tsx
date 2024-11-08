import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components/atoms';
import {Header, TextInput} from '../../components/molecules';
import {Lock, Mail, User} from '../../assets/icon'

const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.Title}>Welcome!</Text>
      <TextInput
      placeholder="Username"
      icon={User}
      />
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  Title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
    marginTop: 22,
    textShadowColor: 'gray',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 5,
  },
});
