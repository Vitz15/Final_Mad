import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {CartContext, CartItem} from '../../context/CartContext';
import {Button} from '../../components/atoms';

const CartPage: React.FC = ({navigation}) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartPage must be used within a CartProvider');
  }

  const {cart, getTotalPrice} = cartContext;
  const cartItems = Object.values(cart).filter(item => item.quantity > 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  const originalPrice = getTotalPrice();
  const discount = originalPrice * 0.5; // 50% discount
  const tax = 2000; // tax
  const totalPrice = originalPrice - discount + tax;

  return (
    <View style={styles.container}>
      <Button
        style={styles.title}
        text="Cart"
        type="arrow-back"
        onPress={() => navigation.goBack()}
      />
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item: CartItem) => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.card}>
                <Image source={item.imageSource} style={styles.image} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.details}>
                    {item.quantity} X {formatCurrency(item.price)}
                  </Text>
                  <Text style={styles.total}>{formatCurrency(item.total)}</Text>
                </View>
              </View>
            )}
          />
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>
              Order Summary ({cartItems.length} Item
              {cartItems.length > 1 ? 's' : ''})
            </Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Original Price</Text>
              <Text style={styles.summaryValue}>
                {formatCurrency(originalPrice)}
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Price After Discount</Text>
              <Text style={styles.summaryValue}>
                {formatCurrency(originalPrice - discount)}
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tax</Text>
              <Text style={styles.summaryValue}>{formatCurrency(tax)}</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Payment Amount</Text>
              <Text style={styles.paymentValue}>
                {formatCurrency(totalPrice)}
              </Text>
            </View>
          </View>
          <View style={styles.checkoutButton}>
            <Button
              text="Checkout"
              type="normal"
              onPress={() => navigation.navigate('Checkout')}
            />
          </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 24,
    alignItems: 'center',
    textShadowRadius: 2,
    textShadowColor: 'black',

    transform: [{translateX: 178}, {translateY: -45}],
  },
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
    marginTop: 21,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    fontFamily: 'SF-Pro-Display-Medium',
    fontWeight: 'bold',
    color: '#555',
    transform: [{translateX: 0}, {translateY: 28}],
  },
  total: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'SF-Pro-Display-Medium',
    color: 'green',
    marginTop: 9,
    transform: [{translateX: 168}, {translateY: 0}],
  },
  summaryContainer: {
    padding: 20,
    paddingBottom: 160,
    borderTopWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  summaryTitle: {
    fontSize: 18,
    fontFamily: 'SF-Pro-Display-Bold',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderTopWidth: 1,
    paddingTop: 10,
    borderColor: '#ddd',
  },
  summaryLabel: {
    fontSize: 16,
    color: '#555',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
  },
  paymentLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  emptyText: {
    fontSize: 35,
    fontFamily: 'SF-Pro-Display-Bold',
    transform: [{translateX: 0}, {translateY: -350}],

    textAlign: 'center',
    color: '#888',
  },
});
