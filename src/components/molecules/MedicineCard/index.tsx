import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {CartContext} from '../../../context/CartContext';

interface MedicationCardProps {
  id: number;
  name: string;
  price: number;
}

const MedicationCard: React.FC<MedicationCardProps> = ({
  id,

  name,
  price,
}) => {
  const [quantity, setQuantity] = useState<number>(0);
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('MedicationCard must be used within a CartProvider');
  }

  const {updateCart} = cartContext;

  useEffect(() => {
    updateCart(id, {id, name, price, quantity});
  }, [quantity]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Format the currency in Rupiah (IDR)
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  const total = price && quantity ? price * quantity : 0;

  return (
    <View style={styles.card}>
      <Source style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Price: {formatCurrency(price)}</Text>
        <Text style={styles.totalPrice}>Total: {formatCurrency(total)}</Text>
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
    </View>
  );
};

export default MedicationCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#dddd',
    marginTop: 5,
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
    fontSize: 20,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
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
});
