import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';
import {Lock, Mail, User} from '../../../assets/icon';

const TextInput = ({label, placeholder, onChangeText, icon}) => {
  return (
    <View style={styles.inputContainer}>
      <Input
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderBottomWidth: 3,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#8f8f8f',
    borderRadius: 40,
    padding: 10,
    paddingHorizontal: 70,
    marginHorizontal: 20,
    color: '#8D92A3',
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 20,
  },
});
