import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Top = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Hello}>Hello, John Doe</Text>
        <Text style={styles.Hope}>Hope You Stay Healthy</Text>
      </View>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#78C194',
    padding: 50,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#D4D4D4',
  },
  Hello: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 24,
    color: 'black',
  },
  Hope: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 20,
    color: 'black',
  },
});
