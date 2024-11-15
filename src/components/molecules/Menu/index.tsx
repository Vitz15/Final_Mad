import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { OrderMedicine } from '../../../assets/icon/';

const OrderMedicineButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        <OrderMedicine style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>Order Medicine</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    elevation: 3,
  },
  container: {
    backgroundColor: '#e0f0ff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    position: 'relative',
  },
  text: {
    position: 'absolute',
    color: 'black',
    fontSize: 24,
    fontFamily: 'SF-Pro-Display-Bold',
    zIndex: 1,
    textAlign: 'center',
    top: '20%',
    right: '55%'
  },
  image: {
    width: 150,
    height: 80,
  },
});

export default OrderMedicineButton;
