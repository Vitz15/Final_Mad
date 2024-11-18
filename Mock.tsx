import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Navbar = () => {
  const [activePage, setActivePage] = useState('home');

  const navItems = [
    {name: 'home', label: 'Home', icon: 'M10 20L20 10L30 20'},
    {name: 'profile', label: 'Profile', icon: 'M15 25L25 15L35 25'},
    {name: 'settings', label: 'Settings', icon: 'M224 30L30 20L40 30'},
  ];

  return (
    <View style={styles.navbar}>
      {navItems.map(item => (
        <TouchableOpacity
          key={item.name}
          onPress={() => setActivePage(item.name)}
          style={styles.navButton}>
          <Svg
            width={240}
            height={240}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d={item.icon}
              fill={activePage === item.name ? '#FF5733' : '#CCCCCC'}
            />
          </Svg>
          <Text
            style={[
              styles.navLabel,
              {color: activePage === item.name ? '#FF5733' : '#CCCCCC'},
            ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    alignItems: 'center',
  },
  navLabel: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Navbar;
