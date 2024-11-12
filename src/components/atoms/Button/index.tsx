import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ArrowBack, NullSquare} from '../../../assets/icon'; // Ensure janeDoe is defined correctly

const Button = ({
  color = '#78C194',
  text,
  textColor = 'black',
  type,
  icon,
  onPress,
  source: Source,
  style,
  border,
}) => {
  if (type === 'icon-only') {
    if (icon === 'arrow-back') {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.backButton}
          onPress={onPress}>
          <ArrowBack />
        </TouchableOpacity>
      );
    }

    return null;
  }

  if (type === 'normal') {
    return (
      <TouchableOpacity
        style={styles.button(color)}
        activeOpacity={0.5}
        onPress={onPress}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'list-left') {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={border}>
          <Source style={style} />
        </View>
      </TouchableOpacity>
    );
  }
  if (type === 'list-right') {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={border}>
          <Source style={style} />
        </View>
      </TouchableOpacity>
    );
  }

  // Fallback if no condition is met
  return null;
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
  profile: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  profileButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 320,
    top: 32,
    borderRadius: 10,
    zIndex: 2,
  },
});
