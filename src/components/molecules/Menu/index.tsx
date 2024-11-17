import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderMedicineButton = ({ onPress, icon: IconComponent, label = 'Order Medicine' }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent && <IconComponent  style={styles.image} />}
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#B2D5FE',
    paddingHorizontal: 10,
    marginHorizontal: 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    position: 'relative',
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 24,
    fontFamily: 'SF-Pro-Display-Bold',
    zIndex: 1,
    textAlign: 'left',
    top: '5%',
    left: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0.5,
  },
  image: {
    width: 150,
    height: 80,
  },
});

export default OrderMedicineButton;
