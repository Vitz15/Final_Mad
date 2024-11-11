import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput, WhiteBar, Footer} from '../../components/molecules';
import {Lock, Mail, User} from '../../assets/icon';

const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <WhiteBar marginLeft={87} />
      <Text style={styles.Title}>Welcome!</Text>
      <Gap height={24} />
      <TextInput placeholder="Username" icon={User} />
      <Gap height={24} />
      <TextInput placeholder="Password" icon={Lock} />
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Gap height={30} />
      <Button text="Sign In" onPress={() => navigation.navigate('Home')} />
      <Gap height={168} />
      <Footer />
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  forgot: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    color: 'red',
    textShadowColor: 'gray',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 5,
    textAlign: 'right',
    marginRight: 35,
    marginTop: 5,
  },
  Title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
    marginTop: 12,
    textShadowColor: 'gray',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 5,
  },
});
