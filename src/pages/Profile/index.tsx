import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Top from '../../components/molecules/Top';
import {Picture} from '../../assets/icon';
import {Button} from '../../components/atoms/';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Top type="profile" />
      <View style={styles.profileContainer}>
        <Picture style={styles.profileImage} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>Your Information</Text>
        <View style={styles.containerdata}>
          <Text style={styles.dataName}>Full Name</Text>
          <Text style={styles.data}>John Alberto Doe</Text>
          <View style={styles.line} />
          <Text style={styles.dataName}>Username</Text>
          <Text style={styles.data}>John Doe</Text>
          <View style={styles.line} />
          <Text style={styles.dataName}>Email Address</Text>
          <Text style={styles.data}>johndoe123@gmail.com</Text>
          <View style={styles.line} />
        </View>
        <Button type="normal" text="Update Profile" textColor="white"/>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#78C194',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#78C194',
    paddingVertical: 30,
  },
  profileImage: {
    marginTop: 25,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 5,
  },
  profileName: {
    fontFamily: 'SF-Display-Pro-Bold',
    marginTop: 15,
    fontSize: 20,
    color: 'white',
  },
  information: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 100,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Medium',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 30,
  },
  containerdata: {
    marginTop: 38,
  },
  dataName: {
    fontFamily: 'SF-Display-Pro-Medium',
    fontSize: 16,
    color: 'black',
    marginLeft: 35,
  },
  data: {
    fontFamily: 'SF-Display-Pro-Regular',
    fontSize: 14,
    color: 'black',
    marginLeft: 43,
    marginTop: 20,
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 7,
    marginHorizontal: 24,
  },
});