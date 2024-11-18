import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput, WhiteBar, Footer} from '../../components/molecules';
import {Lock, Mail, User} from '../../assets/icon';
import {showMessage} from 'react-native-flash-message';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    const auth = getAuth();
    const db = getDatabase();

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        // console.log(user);
        set(ref(db, 'users/' + user.uid), {
          fullName: fullName,
          username: username,
          email: email,
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
        // ..
      });
  };
  return (
    <ScrollView style={styles.container}>
      <Header text="Sign In" text2="Sign Up" type="signPage" padding={95} />
      <WhiteBar marginLeft={250} />
      <Text style={styles.Title}>Create An Account</Text>
      <Gap height={24} />
      <TextInput
        placeholder="Full Name"
        icon={User}
        onChangeText={value => setFullName(value)}
      />
      <Gap height={24} />
      <TextInput
        placeholder="Username"
        icon={User}
        onChangeText={value => setUsername(value)}
      />
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
      />
      <Gap height={52} />
      <Button
        text="Sign Up"
        type="normal"
        onPress={async () => {
          const success = await createUser(); // Tunggu hingga createUser selesai
          if (success) {
            navigation.navigate('SignIn'); // Navigasi ke SignIn jika berhasil
          }
        }}
      />
      <Gap height={160} />
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
