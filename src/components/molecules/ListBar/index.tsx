import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const ListBar = ({type, bgColor, source}) => {
  if (type === 'left') {
    return (
      <Button
        type="list-left"
        style={styles.barLeft(bgColor)}
        source={source}
      />
    );
  }
  if (type === 'right') {
    return (
      <Button
        type="list-right"
        style={styles.barRight(bgColor)}
        source={source}
      />
    );
  }
  // Fallback if no condition is met
  return null;
};

export default ListBar;

const styles = StyleSheet.create({
  barLeft: bgColor => ({
    width: 511,
    height: 100,
    flexDirection: 'row',
  }),
  barRight: bgColor => ({
    width: 511,
    height: 100,
    marginLeft: 100,
    flexDirection: 'row-reverse',
  }),
});
