import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListBar from '../../components/molecules/ListBar';
import {Fever, Pneunomia, Stroke} from '../../assets/icon';
import {Gap} from '../../components/atoms';

const Sickness = () => {
  return (
    <View>
      <Gap height={23} />
      <ListBar type="left" source={Fever} />
      <Gap height={30} />
      <ListBar type="right" source={Pneunomia} />
      <Gap height={30} />
    </View>
  );
};

export default Sickness;

const styles = StyleSheet.create({});
