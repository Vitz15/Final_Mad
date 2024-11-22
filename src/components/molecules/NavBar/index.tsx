import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import HomeIconW from '../../../assets/icon/HomeIconW.svg';
import ProfileIconW from '../../../assets/icon/ProfileIconW.svg';

interface NavBarProps {
  navigation: any;
}

const NavBar: React.FC<NavBarProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <HomeIconW width={24} height={24} /> {/* Home Icon */}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('CheckSickness')}
        style={styles.button}>
        <ProfileIconW width={24} height={24} /> {/* Profile Icon */}
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
