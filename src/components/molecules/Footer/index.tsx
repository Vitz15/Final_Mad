import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Footer = () => {
  return <View style={styles.footer} />;
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#78C194',
    marginTop: 25,
    paddingVertical: 46,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
  },
});
