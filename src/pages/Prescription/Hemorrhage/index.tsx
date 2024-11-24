import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Diptheria as Dipth, Hemorrhage as Hemor} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const HemorrhagePres = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <Hemor style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Subarachnoid hemorrhage</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              Subarachnoid hemorrhage is a type of stroke caused by the
              accumulation of blood in one of the protective layers of the
              brain. This condition is typically characterized by a sudden
              severe headache, stiff neck, or vomiting.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Meva Nareza T:
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Antihypertensive medications (e.g., Labetalol,
              Nicardipine), Pain relievers (e.g., Acetaminophen, Ibuprofen),
              Anticonvulsants (e.g., Phenytoin, Levetiracetam), Sedatives (e.g.,
              Lorazepam), and Surgical interventions if necessary{'\n'}Dosage:
              As prescribed by a healthcare provider; antihypertensive
              medications are adjusted to maintain optimal blood pressure, pain
              relievers are given as needed, anticonvulsants are prescribed to
              prevent seizures, and sedatives may be used for comfort and
              safety.
            </Text>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Seek Immediate Medical Attention: If you experience a sudden
                severe headache, stiff neck, or vomiting, it’s important to get
                medical help immediately, as subarachnoid hemorrhage is a
                medical emergency.
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

export default HemorrhagePres;

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
