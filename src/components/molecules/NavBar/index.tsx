import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Home, HomeW, Profile, ProfileW} from '../../../assets/icon';

const CustomBottomNav = ({type, onPress, onPress2}) => {
  if (type === 'Home') {
    return (
      <View style={styles.container}>
        {/* Home Tab */}
        <TouchableOpacity>
          <HomeW />
        </TouchableOpacity>
        {/* Profile Tab */}
        <TouchableOpacity onPress={onPress2}>
          <Profile />
        </TouchableOpacity>
      </View>
    );
  }
  if (type === 'Profile') {
    return (
      <View style={styles.container}>
        {/* Home Tab */}
        <TouchableOpacity onPress={onPress}>
          <Home />
        </TouchableOpacity>
        {/* Profile Tab */}
        <TouchableOpacity onPress={onPress2}>
          <ProfileW />
        </TouchableOpacity>
      </View>
    );
  }
  if (type === 'Other') {
    return (
      <View style={styles.container}>
        {/* Home Tab */}
        <TouchableOpacity onPress={onPress}>
          <Home />
        </TouchableOpacity>
        {/* Profile Tab */}
        <TouchableOpacity onPress={onPress2}>
          <Profile />
        </TouchableOpacity>
      </View>
    );
  }
};

export default CustomBottomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#78C194',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
