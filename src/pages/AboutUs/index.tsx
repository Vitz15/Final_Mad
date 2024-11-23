import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import slides from '../../../slide';
import OnBoardingItem from '../onBoardingitem';
import Top from '../../components/molecules/Top';
import Paginator from '../../../paginator.tsx';
import {Gmail, Github, Instagram, Vector1} from '../../assets/icon';
import CustomBottomNav from '../../components/molecules/NavBar';
import Gap from '../../components/atoms/Gap';

const AboutUs = ({navigation, route}) => {
  const {uid} = route.params;

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.colorback}>
      <View style={styles.container}>
        <Top type="profile" text="About Us" />
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
          <Text style={styles.hello}>Also Contact Me At:</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconBox}>
              <Gmail style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}>
              <Github style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox}>
              <Instagram style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.vectorContainer}>
            <Vector1 />
          </View>
        </View>
        <Gap height={30} />
        <CustomBottomNav
          type="Other"
          onPress2={() => navigation.navigate('Profile', {uid: uid})}
          onPress={() => navigation.navigate('Home', {uid: uid})}
        />
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  colorback: {
    backgroundColor: 'white',
  },
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  iconBox: {
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  vectorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
