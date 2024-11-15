import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const ListBar = ({type, source, text}) => {
  if (type === 'left') {
    return (
      <Button
        type="list-left"
        text={text}
        style={styles.barLeft}
        source={source}
        overlap={styles.overlap}
      />
    );
  }
  if (type === 'center') {
    return (
      <Button
        type="list-center"
        text={text}
        border={styles.center}
        style={styles.center}
        source={source}
      />
    );
  }
  if (type === 'right') {
    return (
      <Button
        type="list-right"
        text={text}
        border={styles.borderRight}
        style={styles.barRight}
        source={source}
        overlap={styles.overlap}
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
    position: 'relative',
    marginTop: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    zIndex: 1,
  },
  barRight: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row-reverse',
    backgroundColor: 'red',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: 1,
  },

  borderRight: {
    width: 415,
    flexDirection: 'row-reverse',
  },
  overlap: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 20,
    transform: [{translateX: 30}, {translateY: 70}],
    zIndex: 2,
  },
});
