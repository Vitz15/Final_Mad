import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ListBar from '../../components/molecules/ListBar';
import Search from '../../components/molecules/Search';
import {TopRight, BottomLeft, BottomRight, TopLeft} from '../../assets/icon';
import {Gap} from '../../components/atoms';

const Virus = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TopRight style={styles.left} />
        <BottomLeft style={styles.right} />
      </View>
      <Gap height={19} />
      <View style={styles.container}>
        <BottomRight style={styles.left} />
        <TopLeft style={styles.right} />
      </View>
      <Gap height={19} />
      <View style={styles.container}>
        <TopRight style={styles.left} />
        <BottomLeft style={styles.right} />
      </View>
      <Gap height={19} />
      <View style={styles.container}>
        <BottomRight style={styles.left} />
        <TopLeft style={styles.right} />
      </View>
      <Gap height={19} />

      <View style={styles.container}>
        <TopRight style={styles.left} />
        <BottomLeft style={styles.right} />
      </View>
      <Gap height={19} />
      <View style={styles.container}>
        <BottomRight style={styles.left} />
        <TopLeft style={styles.right} />
      </View>
      <View style={styles.last} />
    </ScrollView>
  );
};

export default Virus;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  left: {
    transform: [{translateX: 12}, {translateY: 0}],
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 0.5,
  },
  right: {
    transform: [{translateX: -13}, {translateY: 0}],
  },
  last: {
    width: 382,
    height: 106,
    backgroundColor: '#B2D5FE',
    borderRadius: 11,
    marginLeft: 15,
  },
});
