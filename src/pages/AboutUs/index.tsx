import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  scrollX,
} from 'react-native';
import React, {useRef, useState} from 'react';
import slides from '../../../slide';
import OnBoardingItem from '../onBoardingitem';
import Top from '../../components/molecules/Top';
import Paginator from '../../../paginator.tsx';
import {Footer} from '../../components/molecules/index.tsx';

const AboutUs = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={styles.container}>
      <Top type="profile" text="About Us" onPress={() => navigation.goBack()} />
      <View>
        <FlatList
          data={slides}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <View style={styles.contact}>
        <Text style={styles.hello}>Also Contact Me At :</Text>
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  contact: {
    backgroundColor: 'white',
    marginTop: -10,
  },
  hello: {
    color: 'black',
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 20,
    textAlign: 'center',
  },
});
