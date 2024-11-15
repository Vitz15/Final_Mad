import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScreenContainer} from 'react-native-screens';
import {Button} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const Header = ({type, padding, text, text2, size}) => {
  const navigation = useNavigation();

  if (type === 'signPage') {
    return (
      <View style={styles.container(padding)}>
        <View style={styles.sign}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.Title}>{text}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.Title}>{text2}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  if (type === 'homePage') {
    return (
      <View style={styles.container(padding)}>
        <View>
          <Text style={styles.homeText((size = 24))}>{text}</Text>
          <Text style={styles.homeText((size = 20))}>{text2}</Text>
        </View>
      </View>
    );
  }
  // Fallback if no condition is met
  return null;
};

export default Header;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: '#78C194',
    padding: padding,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#D4D4D4',
  }),
  whiteBar: {
    backgroundColor: 'white',
    width: 68,
    height: 5,
    borderRadius: 40,
    position: 'absolute',
    marginTop: 235,
    marginLeft: 87,
  },
  sign: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    top: 85,
  },
  Title: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 24,
    textShadowColor: '#585858',
    textShadowOffset: {width: 0, height: 2.5},
    textShadowRadius: 5,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
    margin: 20,
    marginHorizontal: 45,
  },
  homeText: size => ({
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: size,
    color: 'black',
  }),
});
