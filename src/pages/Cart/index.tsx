import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {CartContext, CartItem} from '../../context/CartContext';

const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartPage must be used within a CartProvider');
  }

  const {cart, getTotalPrice} = cartContext;

  // Filter out items with quantity 0
  const cartItems = Object.values(cart).filter(item => item.quantity > 0);

  // Function to format currency in Rupiah (IDR)
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item: CartItem) => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.cartItem}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>
                  Price: {formatCurrency(item.price)} x {item.quantity} ={' '}
                  {formatCurrency(item.total)}
                </Text>
              </View>
            )}
          />
          <Text style={styles.total}>
            Grand Total: {formatCurrency(getTotalPrice())}
          </Text>
        </>
      ) : (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      )}
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cartItem: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#888',
  },
});
