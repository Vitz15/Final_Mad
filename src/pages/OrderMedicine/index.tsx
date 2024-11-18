import React from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import MedicationCard from '../../components/molecules/MedicineCard';
import Search from '../../components/molecules/Search';
import {SearchLogo} from '../../assets/icon';
import {Button} from '../../components/atoms';
import {
  Penicilin,
  Amlodipine,
  Amoxan,
  Aspirin,
  Loperamide,
  Metformin,
  Paracetamol,
  Paramex,
} from '../../assets/icon';

const ProductListScreen = ({navigation}) => {
  const products = [
    {
      id: 1,
      name: 'Paracetamol',
      price: 5000,
      image: require('../../assets/icon/paracetamol.svg'),
    },
    {
      id: 2,
      name: 'Paramex',
      price: 7500,
    },
    {
      id: 3,
      name: 'Penicilin',
      price: 20000,
    },
  ];

  return (
    <View style={styles.container}>
      <Search placeholder="Find Your Medicine?" icon={SearchLogo} />
      <ScrollView style={styles.scrollView}>
        {products.map(product => (
          <MedicationCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageSource={Penicilin}
          />
        ))}
      </ScrollView>
      <Button
        text="Add To Cart"
        type="normal"
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
