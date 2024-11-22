import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigationState, useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-svg';

const CustomBottomNav = () => {
  const navigation = useNavigation();
  const currentRoute =
    navigation.getState()?.routes[navigation.getState().index]?.name;

  return (
    <View style={styles.container}>
      {/* Home Tab */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>jao</Text>
      </TouchableOpacity>
      {/* Profile Tab */}
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>jao</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBottomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#78C194',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
