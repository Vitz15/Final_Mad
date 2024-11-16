import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'; // Mengimpor useNavigation dan useRoute
import {
  HomeIcon,
  ProfileIcon,
  HomeWhite,
  ProfileWhite,
} from '../../../assets/icon'; // Perbaikan import untuk ProfileWhite

interface NavBarProps {
  navigation: any;
}

const NavBar: React.FC<NavBarProps> = ({navigation}) => {
  const route = useRoute(); // Mengambil rute saat ini
  const {name} = route; // Mendapatkan nama halaman aktif (route)

  return (
    <View style={styles.container}>
      {/* Tombol Home dengan ikon berubah menjadi putih jika halaman aktif */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        {name === 'Home' ? <HomeWhite /> : <HomeIcon />}{' '}
        {/* Ikon putih jika halaman Home */}
      </TouchableOpacity>

      {/* Tombol Sickness dengan ikon berubah menjadi putih jika halaman aktif */}
      <TouchableOpacity
        onPress={() => navigation.navigate('CheckSickness')}
        style={styles.button}>
        {name === 'CheckSickness' ? <ProfileWhite /> : <ProfileIcon />}{' '}
        {/* Ikon putih jika halaman Profile */}
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
