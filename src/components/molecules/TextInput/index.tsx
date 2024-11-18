import {
  StyleSheet,
  TextInput as Input,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import EyeOpenIcon from '../../../assets/icon/eye-open.svg'; 
import EyeSlashIcon from '../../../assets/icon/eye-slash.svg'; 
const TextInput = ({
  label,
  placeholder,
  onChangeText,
  icon: IconComponent,
  secureTextEntry,
  onSecureTextToggle,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry); 

 
  const toggleSecureTextEntry = () => {
    setIsSecure(!isSecure); 
    if (onSecureTextToggle) {
      onSecureTextToggle(!isSecure); 
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        {IconComponent && <IconComponent width={24} height={24} />}
      </View>
      <Input
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#8D92A3"
        secureTextEntry={isSecure} 
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={toggleSecureTextEntry}
          style={styles.iconWrapper}>
          {isSecure ? (
            <EyeSlashIcon width={24} height={24} /> 
          ) : (
            <EyeOpenIcon width={24} height={24} /> 
          )}
        </TouchableOpacity>
      )}
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
  iconWrapper: {
    marginLeft: 10,
  },
});
