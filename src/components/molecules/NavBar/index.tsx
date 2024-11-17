// src/components/molecules/NavBar/index.js
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {HomeIconW, ProfileIconW} from '../../../assets/icon'; // Adjust the import statement

interface NavBarProps {
  navigation: any;
}

const NavBar: React.FC<NavBarProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <HomeIconW /> {/* Use the white version of HomeIcon */}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('CheckSickness')}
        style={styles.button}>
        <ProfileIconW /> {/* Use the white version of ProfileIcon */}
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6FCF97',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
