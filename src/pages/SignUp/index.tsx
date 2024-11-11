import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput, WhiteBar, Footer} from '../../components/molecules';
import {Lock, Mail, User} from '../../assets/icon';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <WhiteBar marginLeft={250} />
      <Text style={styles.Title}>Create An Account</Text>
      <Gap height={24} />
      <TextInput placeholder="Full Name" icon={User} />
      <Gap height={24} />
      <TextInput placeholder="Username" icon={User} />
      <Gap height={24} />
      <TextInput placeholder="Email" icon={Mail} />
      <Gap height={24} />
      <TextInput placeholder="Password" icon={Lock} />
      <Gap height={52} />
      <Button text="Sign Up" onPress={() => navigation.navigate('Home')} />
      <Gap height={20} />
      <Footer />
    </ScrollView>
  );
};

export default SignUp;

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
