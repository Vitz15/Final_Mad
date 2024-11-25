import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SepsisImage} from '../../../assets/icon/Symptoms';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const SepsisCard = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <SepsisImage style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.symptomContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Sepsis</Text>
            <Gap height={21} />
            <View style={styles.reasonContainer}>
              <View style={styles.selection}>
                <Text style={styles.reasonText}>
                  • Fever or low body temperature (below 96.8°F or 36°C).
                  {'\n'}• Rapid heart rate.{'\n'}• Rapid breathing or difficulty
                  breathing. {'\n'}• Confusion or disorientataion.
                  {'\n'}• Extreme shivering or muscle pain. {'\n'}• Sweating or
                  feeling very cold {'\n'}• Decreased urine output {'\n'}• Skin
                  rash or discoloration {'\n'}• Low blood pressure (leading to
                  dizzines or fainting)
                </Text>
              </View>
            </View>
            <Gap height={21} />
            <Text style={styles.symptomTitle}>Sepsis can be caused by :</Text>
            <Gap height={21} />
            <Text style={styles.symptomText}>
              Bacterial infection, Fungal infection, Viral infection, Infections
              from surgery or injury, Respiratory infections, (e.g., pneunomia),
              Urinary tract infections(UTIs), Abdominal infections (e.g.,
              appendicts, diverculitis), Bloodstream infections, Weakened immune
              system, Chronic diseases (e.g., diabetes, kidney disesase),
              Invasive medical devices (e.g., catheters, ventilators).
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

export default SepsisCard;

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
    paddingBottom: 155,
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
