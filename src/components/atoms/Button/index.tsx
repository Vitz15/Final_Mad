import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../../assets/icon';
import {positionStyle} from 'react-native-flash-message';

const Button = ({
  color = '#78C194',
  text,
  textColor = 'black',
  type,
  icon,
  onPress,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.backButton}
        onPress={onPress}>
        {icon === 'arrow-back' && <ArrowBack />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 76,
  }),
  text: textColor => ({
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 24,
    color: textColor,
  }),
  backButton: {
    width: 50,
    height: 50,
  },
});
