import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HighBlood} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const HighBloodPressureCard = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <HighBlood style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>High Blood Pressure</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              High blood pressure, also known as hypertension, is a condition
              where the force of blood against the walls of the arteries is
              consistently too high. This pressure can cause damage to blood
              vessels and strain the heart, increasing the risk of severe health
              issues, including heart disease, stroke, kidney damage, and other
              complications.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Richard Lee:
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Amlodipine, Captopril, Lisinopril, Atenolol Dosage:
              As prescribed by a healthcare provider, typically once daily
            </Text>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Avoid salty food. Maximum of 1 teaspoon per day. {'\n'}• Take
                medications as prescribed, at the same time each day, to help
                control blood pressure effectively.{'\n'}• Monitor your blood
                pressure regularly to ensure it is within the target range.{' '}
                {'\n'}• Maintain a healthy diet low in sodium and rich in
                fruits, vegetables, and whole grains.{'\n'}• Engage in regular
                physical activity, such as walking or swimming, to help manage
                blood pressure. {'\n'}• Limit alcohol consumption and avoid
                smoking, as both can increase blood pressure.
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

export default HighBloodPressureCard;

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
