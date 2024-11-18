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
  overlap,
}) => {
  if (type === 'arrow-back') {
    return (
      <View style={styles.back}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.backButton}
          onPress={onPress}>
          <ArrowBack />
        </TouchableOpacity>
        <Text style={style}>{text}</Text>
      </View>
    );
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
    if (icon === 'left') {
      return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <View>
            <Text style={overlap}>{text}</Text>
            <Source style={style} />
          </View>
        </TouchableOpacity>
      );
    }
  }
  if (type === 'list-center') {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View>
          <Text>{text}</Text>
          <Source style={style} />
        </View>
      </TouchableOpacity>
    );
  }
  if (type === 'list-right') {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={border}>
          <Text style={overlap}>{text}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    left: 15,
  },
  back: {
    backgroundColor: '#78C194',
    width: 412,
    height: 50,
    borderBottomRightRadius: 55,
    borderBottomLeftRadius: 55,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#D4D4D4',
    marginBottom: 34,
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
