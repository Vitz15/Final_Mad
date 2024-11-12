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
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 40,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  iconContainer: {
    marginRight: 20,
  },
  input: {
    flex: 1,
    color: 'black',
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 20,
  },
});
