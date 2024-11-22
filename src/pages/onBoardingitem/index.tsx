import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import React from 'react';

const OnBoardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.background} style={[styles.background, {width}]} />
      <View style={styles.profileContainer}>
        <Image source={item.image} style={styles.profileImage} />
      </View>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.emailTitle}>Email Address</Text>
          <Text style={styles.email}>{item.email}</Text>
          <Text style={styles.phoneTitle}>Phone Number</Text>
          <Text style={styles.phone}>{item.number}</Text>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  background: {
    height: 350,
    resizeMode: 'cover',
  },
  profileContainer: {
    position: 'absolute',
    marginTop: 60,
    width: 200,
    height: 200,
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 22,
    color: 'black',
    marginVertical: 8,
  },
  description: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  emailTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
  email: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },
  phoneTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
  phone: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },
});
