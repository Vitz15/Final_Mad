import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MiniBox = ({
  text = 'MiniBox',
  backgroundColor = '#d1e9ff',
  width = 66,
  height = 63,
  icon: IconComponent,
}) => {
  return (
    <View style={[styles.container, {backgroundColor, width, height}]}>
      {IconComponent && <IconComponent style={styles.icon} />}
    </View>
  );
};

export default MiniBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 52,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  icon: {
    marginBottom: 4,
  },
});
