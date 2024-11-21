import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10,20,10],
            extrapolate: 'clamp',
        });
        return <Animated.View style={[styles.dot, {width: dotWidth}]} key={i.toString()} />;
      })}
    </View>
  );
};

export default paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  dot: {
    marginTop: 2,
    height: 10,
    marginHorizontal: 7,
    borderRadius: 5,
    backgroundColor: 'black',
  },
});
