import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Picture} from '../../../assets/icon';

const Top = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Picture style={styles.profileImage}/>
        <View style={styles.textContainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.message}>Hope You Stay Healthy!</Text>
        </View>
      </View>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#78C194',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50, //
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    marginLeft: 2,
  },
  name: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 24,
    fontWeight: '600',
    color: 'black',

  },
  message: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 20,
    color: 'black',
  },
});
