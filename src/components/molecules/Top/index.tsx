import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBack, Back} from '../../../assets/icon';

const Top = ({
  name,
  photo,
  backgroundColor = '#78C194',
  type,
  text,
  navigation,
  onPress,
}) => {
  if (type === 'profile') {
    return (
      <View
        style={[
          styles.usercontainer,
          {backgroundColor: backgroundColor || '#ffffff'},
        ]}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.backButton}
          onPress={onPress}>
          <ArrowBack />
        </TouchableOpacity>
        <Text style={styles.title}>{text}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.profileContainer}>
        {photo ? (
          <Image source={{uri: photo}} style={styles.profileImage} />
        ) : (
          <Text style={styles.profileText}>No Profile Picture</Text>
        )}
        <View style={styles.textContainer}>
          {name ? (
            <Text style={styles.name}>{name}</Text>
          ) : (
            <Text style={styles.name}>No Name Available</Text>
          )}
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
    paddingVertical: 22,
    paddingHorizontal: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 50,
    width: 65,
    height: 65,
    marginRight: 15,
  },
  profileText: {
    fontSize: 16,
    color: 'gray',
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
    backgroundColor: '#78C194',
    paddingVertical: 25,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  backButton: {
    left: 10,
    padding: 5,
  },
  title: {
    flex: 0.9,
    fontFamily: 'SF-Pro-Display-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
});
