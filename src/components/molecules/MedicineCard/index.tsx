import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {CartContext} from '../../../context/CartContext';

interface MedicationCardProps {
  id: number;
  name: string;
  price: number;
  imageSource: any;
}

const MedicationCard: React.FC<MedicationCardProps> = ({
  id,
  imageSource,
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
    updateCart(id, {id, name, price, quantity, imageSource});
  }, [quantity]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  const total = price && quantity ? price * quantity : 0;

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
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
    borderRadius: 11,
    padding: 10,
    marginVertical: 5,
    width: 374,
    borderBottomWidth: 5,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.13)',
    marginTop: 31,
  },
  image: {
    width: 89,
    height: 83,
    borderRadius: 12,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 20,
    color: 'black',
  },
  price: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    color: 'black',
  },
  totalPrice: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 14,
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
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 18,
    color: '#333',
  },
  quantity: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 16,

    marginHorizontal: 10,
  },
});
