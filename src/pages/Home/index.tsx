import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavBar from '../../components/molecules/NavBar';
import {Header} from '../../components/molecules';

const Home = ({navigation}) => {
  return (
    <View>
      <Header
        text="Hello, John Doe"
        text2="Hope You Stay Healthy"
        type="homePage"
        padding={50}
      />
      <NavBar navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
