import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {SearchLogo} from '../../../assets/icon';

const Search = ({placeholder, onChangeText, icon: Icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          {Icon && <Icon width={24} height={24} />}
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="#8D92A3"
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#78C194',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 40,
    width: 355,
    height: 40,
    backgroundColor: 'white',
  },
  iconContainer: {
    marginRight: 20,
    marginLeft: 15,
  },
  input: {
    flex: 1,
    color: 'black',
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
  },
});
