import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const ListBar = ({type, bgColor, source}) => {
  if (type === 'left') {
    return (
      <Button
        type="list-left"
        border={styles.borderLeft}
        style={styles.barLeft}
        source={source}
      />
    );
  }
  if (type === 'right') {
    return (
      <Button
        type="list-right"
        border={styles.borderRight}
        style={styles.barRight}
        source={source}
      />
    );
  }
  // Fallback if no condition is met
  return null;
};

export default ListBar;

const styles = StyleSheet.create({
  barLeft: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  barRight: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'red',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  borderLeft: {
    width: 380,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderRightWidth: 10,
    borderColor: 'red',
  },
  borderRight: {
    width: 380,
    marginRight: 41,
    flexDirection: 'row-reverse',
    borderWidth: 10,
    borderColor: 'black',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
