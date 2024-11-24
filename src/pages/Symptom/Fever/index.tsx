import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FeverImage} from '../../../assets/icon/Symptoms';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const FeverCard = ({navigation, route}) => {
  const {uid} = route.params;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <Feverimage style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.symptomContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Fever</Text>
            <Gap height={21} />
            <View style={styles.reasonContainer}>
              <View style={styles.selection}>
                <Text style={styles.reasonText}>
                  • Elevated body temperature (typically above 100.4°F or 38°C).
                  {'\n'}• Chills and shivering.{'\n'}• Sweating. {'\n'}•
                  Headache.
                  {'\n'}• Muscle aches. {'\n'}• Fatigue or general weakness.
                  {'\n'}• Irritability or feeling uneasy.
                </Text>
              </View>
            </View>
            <Gap height={21} />
            <Text style={styles.symptomTitle}>Fever can be caused by :</Text>
            <Gap height={21} />
            <Text style={styles.symptomText}>
              Viral infection, Bacterial infection, Fungal infections,
              Parasitic, infections, Inflamamatory Conditions, Heat Exhaustion,
              Cancer, Vaccinations.
            </Text>
          </View>
        </View>
      </View>
      <CustomBottomNav
        type="Other"
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
        onPress={() => navigation.navigate('Home', {uid: uid})}
      />
    </View>
  );
};

export default FeverCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  cardImageContainer: {
    width: '100%',
    height: 250,
    borderRadius: 0,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -60,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
  },
  textContainer: {
    paddingBottom: 255,
  },
  title: {
    marginTop: 10,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 20,
    color: '#333',
  },
  symptomContainer: {
    width: '100%',
    marginBottom: 15,
  },
  symptomTitle: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 16,
    color: '#333',
  },
  symptomText: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    color: '#555',
  },
  reasonContainer: {
    width: '100%',
  },
  reasonTitle: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 16,
    color: '#333',
  },
  reasonText: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    color: '#555',
  },
  selection: {
    paddingHorizontal: 8,
  },
});
