import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const ListBar = ({type, source, text, icon}) => {
  if (type === 'left') {
    return (
      <Button
        type="list-left"
        icon="left"
        text={text}
        style={styles.barLeft}
        source={source}
        overlap={styles.overlapLeft}
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
        overlap={styles.overlapRight}
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
    marginTop: 0,
    flexDirection: 'row',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    zIndex: 1,
  },
  barRight: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row-reverse',

    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: 1,
  },

  borderRight: {
    width: 415,
    flexDirection: 'row-reverse',
  },
  overlapLeft: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 20,
    transform: [{translateX: 30}, {translateY: 75}],
    zIndex: 2,
    textShadowColor: 'black',
    textShadowRadius: 0.5,
  },
  overlapRight: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 20,
    position: 'absolute',
    transform: [{translateX: -205}, {translateY: 45}],
    zIndex: 2,
    textShadowColor: 'black',
    textShadowRadius: 0.5,
  },
});
