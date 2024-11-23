import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Picture, Back} from '../../../assets/icon';

const Top = ({type, onPress, text}) => {
  if (type === 'profile') {
    return (
      <View style={styles.usercontainer}>
        <TouchableOpacity onPress={onPress} style={styles.backButton}>
          <Back style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>{text}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Picture style={styles.profileImage} />
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
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
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
  usercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 5,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    fontFamily: 'SF-Pro-Display-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
});
