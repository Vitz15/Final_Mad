import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import MedicationCard from '../../components/molecules/MedicineCard';
import Search from '../../components/molecules/Search';
import {SearchLogo} from '../../assets/icon';
import {Button} from '../../components/atoms';

const ProductListScreen = ({navigation}) => {
  const products = [
    // Example products array
    {
      id: 1,
      name: 'Paracetamol',
      price: 5000,
    },
    {
      id: 2,
      name: 'Paramex',
      price: 7500,
    },
    // Add more products as needed
  ];

  return (
    <View style={styles.container}>
      {/* Search component at the top */}
      <Search placeholder="Find Your Medicine?" icon={SearchLogo} />

      {/* ScrollView to list the MedicationCards */}
      <ScrollView style={styles.scrollView}>
        {products.map(product => (
          <MedicationCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </ScrollView>
      <Button
        text="Add To Cart"
        type="normal"
        style={styles.button}
        onPress={() => navigation.navigate('Cart')}
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
  },
});
