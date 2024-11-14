// src/components/molecules/NavBar/index.tsx

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface NavBarProps {
  navigation: any;
}

const NavBar: React.FC<NavBarProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Tombol Home */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      {/* Tombol SignIn */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
        style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Tombol SignUp */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Tombol Sickness */}
      <TouchableOpacity
        onPress={() => navigation.navigate('CheckSickness')}
        style={styles.button}>
        <Text style={styles.buttonText}>Sickness</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f8f9fa',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default NavBar;
