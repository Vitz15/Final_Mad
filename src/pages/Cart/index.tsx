import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {CartContext, CartItem} from '../../context/CartContext';
import {Button, Gap} from '../../components/atoms';
import Top from '../../components/molecules/Top';

import {
  getDatabase,
  ref,
  push,
  set,
  serverTimestamp,
  onValue,
} from 'firebase/database'; // Realtime Database
import {app} from '../../config/Firebase'; // Your Firebase app config
import {Loading} from '../../components/molecules';
import CustomBottomNav from '../../components/molecules/NavBar';

const CartPage: React.FC = ({navigation, route}) => {
  const {uid} = route.params;
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

  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null); // Store the order ID for confirmation

  // Initialize Realtime Database
  const db = getDatabase(app);

  const handleCheckout = async () => {
    setIsLoading(true); // Show loading spinner when checkout starts

    const checkoutData = {
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
      })),
      originalPrice: originalPrice,
      discount: discount,
      tax: tax,
      totalPrice: totalPrice,
      date: new Date().toISOString(), // Adding current date/time for the order
      timestamp: serverTimestamp(), // Firebase server timestamp
    };

    try {
      // Generate a new order key
      const newOrderRef = push(ref(db, 'orders'));
      // Set the order data at the new key location
      await set(newOrderRef, checkoutData);

      // Store the order ID for confirmation
      setOrderId(newOrderRef.key);
    } catch (error) {
      console.error('Error placing order: ', error);
      Alert.alert(
        'Error',
        'There was an error placing your order. Please try again.',
      );
    } finally {
      setIsLoading(false); // Hide loading spinner after finishing
    }
  };

  // Listen for order confirmation in Firebase using onValue (optional)
  React.useEffect(() => {
    if (orderId) {
      const orderRef = ref(db, 'orders/' + orderId);
      onValue(orderRef, snapshot => {
        const orderData = snapshot.val();
        if (orderData) {
          Alert.alert('Success', 'Your order has been placed successfully!', [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Home'), // Navigate back to Home or another screen
            },
          ]);
        }
      });
    }
  }, [orderId]);

  return (
    <View style={styles.container}>
      <Top
        type="profile"
        text="Virus List"
        backgroundColor="#78C194"
        onPress={() => navigation.goBack()}
      />
      {cartItems.length > 0 ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
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
              onPress={handleCheckout} // Handle checkout button press
            />
            <Gap height={20} />
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      )}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Loading />
          <Text style={styles.loadingText}>Processing your order...</Text>
        </View>
      )}
      <View>
        <CustomBottomNav
          type="Other"
          onPress2={() => navigation.navigate('Profile', {uid: uid})}
          onPress={() => navigation.navigate('Home', {uid: uid})}
        />
      </View>
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop: 31,
    marginLeft: 20,
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
    fontFamily: 'SF-Pro-Display-Bold',
    color: 'black',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    fontFamily: 'SF-Pro-Display-Medium',
    color: 'black',
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
    borderColor: 'black',
    width: '100%',
    backgroundColor: 'white',
  },
  summaryTitle: {
    fontSize: 18,
    fontFamily: 'SF-Pro-Display-Bold',
    marginBottom: 10,
    color: 'black',
  },
  summaryRow: {
    backgroundColor: 'white',
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
    borderColor: 'black',
    backgroundColor: 'white',
  },
  summaryLabel: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    color: 'black',
  },
  summaryValue: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
    color: 'black',
  },
  paymentLabel: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 18,
    color: 'black',
  },
  paymentValue: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 18,

    fontWeight: 'bold',
    color: 'black',
  },
  checkoutButton: {
    marginTop: 20,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 19,
    fontFamily: 'SF-Pro-Display-Bold',
    bottom: 500,
    color: '#777',
    alignContent: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#555',

    transform: [{translateX: 0}, {translateY: -350}],
    textAlign: 'center',
    color: '#888',
  },
});
