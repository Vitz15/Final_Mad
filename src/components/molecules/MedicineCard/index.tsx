import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MedicationCard = ({source: Source}) => {
  const [quantity, setQuantity] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <View style={styles.card}>
      <Source style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>Penicillin</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={toggleCheckbox}
        style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked && <Ionicons name="alarm" size={20} color="white" />}
      </TouchableOpacity>
    </View>
  );
};

export default MedicationCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 20,
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#78C194',
    borderColor: '#78C194',
  },
});
