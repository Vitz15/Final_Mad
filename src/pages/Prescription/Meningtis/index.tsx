import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Diptheria as Dipth, Meningitis} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const MeningitisPres = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <Meningitis style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Meningitis</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              Meningitis is inflammation of the meninges, the protective layers
              surrounding the brain and spinal cord. Meningitis can sometimes be
              difficult to recognize, as it has early symptoms similar to the
              flu, such as fever and headache.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Pittara:
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Antibiotics (e.g., Ceftriaxone, Vancomycin),
              Antiviral medications (e.g., Acyclovir, Ganciclovir), Pain
              relievers (e.g., Acetaminophen, Ibuprofen), Corticosteroids (e.g.,
              Dexamethasone){'\n'}Dosage: As prescribed by a healthcare
              provider; typically, antibiotics or antivirals are administered
              intravenously for bacterial or viral infections, and pain
              relievers are given as needed for symptom management.
            </Text>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Seek immediate medical attention, because meningitis is a
                serious condition and requires prompt treatment. If you
                experience symptoms such as fever, headache, stiff neck, or
                sensitivity to light, contact a healthcare provider immediately.
                {'\n'}• Must vaccination, consider vaccination against certain
                types of meningitis (e.g., meningococcal, pneumococcal) to help
                prevent future infections, as advised by your doctor.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Gap height={0} />
      <CustomBottomNav
        type="Other"
        onPress={() => navigation.navigate('Home', {uid: uid})}
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
      />
    </View>
  );
};

export default MeningitisPres;

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
