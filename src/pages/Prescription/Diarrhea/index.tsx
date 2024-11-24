import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Diarrhea, Diptheria as Dipth} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const DiarrheaPres = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <Diarrhea style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Diarhea</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              Diarrhea is a condition characterized by frequent, loose, or
              watery stools occurring more than three times a day. It is
              commonly caused by the consumption of food or drink contaminated
              with viruses, bacteria, or parasites. While it usually resolves
              with self-care, diarrhea may sometimes require medical attention.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Meva Nareza T:
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Loperamide (Imodium), Oral Rehydration Salts (ORS),
              Antibiotics (e.g., Ciprofloxacin, Azithromycin) if bacterial
              infection is suspected{'\n'}Dosage: As prescribed by a healthcare
              provider; for Loperamide, typically 2 mg after the first loose
              stool, then 1 mg after each subsequent loose stool (not to exceed
              8 mg per day). ORS is taken as directed to prevent dehydration.
            </Text>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Stay hydrated, drink plenty of fluids, especially Oral
                Rehydration Solutions (ORS), to prevent dehydration, which can
                occur due to frequent diarrhea.{'\n'}• Avoid dairy and fatty
                foods, while recovering, avoid dairy products, greasy or spicy
                foods, and caffeine, as they can worsen symptoms.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Gap height={33} />
      <CustomBottomNav
        type="Other"
        onPress={() => navigation.navigate('Home', {uid: uid})}
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
      />
    </View>
  );
};

export default DiarrheaPres;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
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
    paddingBottom: 55,
  },
  title: {
    marginTop: 10,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 20,
    color: 'black',
  },
  prescriptionContainer: {
    width: '100%',
    marginBottom: 15,
  },
  prescriptionTitle: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 16,
    color: 'black',
  },
  prescriptionText: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    color: 'black',
  },
  adviceContainer: {
    width: '100%',
  },
  adviceTitle: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 16,
    color: 'black',
  },
  adviceText: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    color: 'black',
  },
  selection: {
    paddingHorizontal: 15,
  },
});
