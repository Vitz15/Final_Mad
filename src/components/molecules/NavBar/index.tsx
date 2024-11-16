import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native'; // Menggunakan useRoute untuk mendapatkan rute aktif
import {
  HomeIcon,
  ProfileIcon,
  HomeWhite,
  ProfileWhite,
} from '../../../assets/icon'; // Pastikan ikon putih tersedia

interface NavBarProps {
  navigation: any;
}

const NavBar: React.FC<NavBarProps> = ({navigation}) => {
  const route = useRoute(); // Mengambil informasi rute aktif
  const {name} = route; // Mendapatkan nama halaman aktif

  return (
    <View style={styles.container}>
      {/* Tombol Home dengan ikon berubah menjadi putih jika halaman aktif */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        {name === 'Home' ? <HomeWhite /> : <HomeIcon />}{' '}
        {/* Ikon putih jika halaman Home aktif */}
      </TouchableOpacity>

      {/* Tombol Profile dengan ikon berubah menjadi putih jika halaman aktif */}
      <TouchableOpacity
        onPress={() => navigation.navigate('CheckSickness')}
        style={styles.button}>
        {name === 'CheckSickness' ? <ProfileWhite /> : <ProfileIcon />}{' '}
        {/* Ikon putih jika halaman CheckSickness aktif */}
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
