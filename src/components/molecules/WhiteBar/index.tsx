import {StyleSheet, View} from 'react-native';
import React from 'react';

const WhiteBar = ({marginLeft}) => {
  return <View style={[styles.whiteBar, {marginLeft}]} />;
};

export default WhiteBar;

const styles = StyleSheet.create({
  whiteBar: {
    backgroundColor: 'white',
    width: 68,
    height: 5,
    borderRadius: 40,
    position: 'absolute',
    marginTop: 235,
  },
});
