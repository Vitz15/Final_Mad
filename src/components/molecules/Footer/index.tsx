import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Footer = () => {
  return <View style={styles.footer} />;
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#78C194',
    paddingVertical: 46,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    zIndex: 0,
    marginVertical: -10,
  },
});