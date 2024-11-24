import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Diptheria as Dipth, Heartattack} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const HeartAttack = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <Heartattack style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Heart Attack</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              A heart attack is a serious cardiac condition that occurs when the
              heart muscle does not receive an adequate blood supply. This
              disrupts the heart's ability to pump blood throughout the body. If
              not treated promptly, a heart attack can lead to death.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Pittara:
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Aspirin, Nitroglycerin, Beta-blockers (e.g.,
              Metoprolol), ACE inhibitors (e.g., Lisinopril), Statins (e.g.,
              Atorvastatin){'\n'}Dosage: As prescribed by a healthcare provider,
              with some medications taken daily for prevention and others
              administered during an acute event
            </Text>
          </View>
          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Lifestyle modifications, maintain a heart-healthy diet low in
                saturated fats, avoid smoking, and reduce alcohol intake.{'\n'}•
                Manage stress, practice stress-reducing techniques, like deep
                breathing or mindfulness, as stress can impact heart health.
                {'\n'}• Take medications as prescribed, follow the prescribed
                schedule carefully to support heart health and prevent future
                events.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Gap height={15} />
      <CustomBottomNav
        type="Other"
        onPress={() => navigation.navigate('Home', {uid: uid})}
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
      />
    </View>
  );
};

export default HeartAttack;

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
