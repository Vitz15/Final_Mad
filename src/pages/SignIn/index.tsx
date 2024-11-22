import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap} from '../../components/atoms';
import {
  Header,
  TextInput,
  Loading,
  WhiteBar,
  Footer,
} from '../../components/molecules';
import {Lock, Mail, User} from '../../assets/icon';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const onSubmit = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        setLoading(false);
        showMessage({
          message: 'Login Berhasil',
          type: 'success',
        });
        navigation.navigate('Home', {uid: user.uid});
      })
      .catch(error => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <Header text="Sign In" text2="Sign Up" type="signPage" padding={95} />
        <WhiteBar marginLeft={87} />
        <Text style={styles.Title}>Welcome!</Text>
        <Gap height={24} />
        <TextInput
          placeholder="Email"
          icon={Mail}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={24} />
        <TextInput
          placeholder="Password"
          icon={Lock}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={30} />
        <Button text="Sign In" type="normal" onPress={onSubmit} />
        <Gap height={320} />
        <Footer />
      </ScrollView>
      {loading && <Loading />}
    </>
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
    textShadowColor: 'rgba(255, 0, 0, 0.5)',
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
