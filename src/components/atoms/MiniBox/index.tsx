import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const MiniBox = ({
  text = 'MiniBox',
  backgroundColor = '#d1e9ff',
  width = 66,
  height = 63,
  icon: IconComponent,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={[styles.container, {backgroundColor, width, height}]}>
          {IconComponent && <IconComponent style={styles.icon} />}
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MiniBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  wrapper: {
    alignItems: 'center',
    marginHorizontal: 35,
    transform: [{translateX: 10}, {translateY: 0}],
  },
  text: {
    marginTop: 0,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  icon: {
    marginBottom: 4,
  },
  button: {
    borderRadius: 5,
  },
});
