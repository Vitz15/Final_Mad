import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';
import {Lock, Mail, User} from '../../../assets/icon';

const TextInput = ({label, placeholder, onChangeText, icon: Icon}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        {Icon && <Icon width={24} height={24} />}
      </View>
      <Input
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#8D92A3"
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 3,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#8f8f8f',
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000000',
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 20,
  },
});
