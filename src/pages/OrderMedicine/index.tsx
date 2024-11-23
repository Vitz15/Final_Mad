import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, ActivityIndicator} from 'react-native';
import MedicationCard from '../../components/molecules/MedicineCard';
import Search from '../../components/molecules/Search';
import {SearchLogo} from '../../assets/icon';
import {Button, Gap} from '../../components/atoms';
import {getDatabase, ref, onValue} from 'firebase/database';
import CustomBottomNav from '../../components/molecules/NavBar';
import Home from '../Home';

const ProductListScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, 'products');

    const unsubscribe = onValue(
      productsRef,
      snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const productsArray = Object.keys(data).map(key => ({
            id: key,
            name: data[key].name,
            price: data[key].price,
            image: {uri: `data:image/jpeg;base64,${data[key].imageBase64}`}, // Convert Base64
          }));
          setProducts(productsArray);
        } else {
          console.error('No products data found in database.');
        }
        setLoading(false);
      },
      error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      },
    );

    return () => unsubscribe(); // Cleanup listener
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Search placeholder="Find Your Medicine?" icon={SearchLogo} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        {products.map(product => (
          <MedicationCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageSource={product.image}
          />
        ))}
      </ScrollView>
      <Gap height={70} />
      <View style={styles.button}>
        <Button
          text="Add To Cart"
          type="normal"
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
      <CustomBottomNav
        type="Other"
        onPress={() => navigation.navigate('Home')}
        onPress2={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginTop: 10,
    marginLeft: 18,
  },
  button: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
    paddingVertical: 15,
    borderRadius: 100,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
