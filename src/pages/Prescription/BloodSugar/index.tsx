import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BloodSugar} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const BloodSugarPres = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <BloodSugar style={styles.cardImage} />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Blood Sugar</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              Normal blood sugar levels generally do not rely on a single fixed
              number. This is because blood sugar levels can fluctuate, for
              example, before and after meals or before sleeping. In healthy
              individuals, it is important to keep blood sugar levels stable
              within the normal range. This helps prevent insulin resistance or
              the risk of developing diabetes. Meanwhile, for people with
              diabetes, it is crucial to control blood sugar levels to prevent
              further organ damage.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Gracia Fensynthia :
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Metformin, Glibenclamide, Insulin, Sitagliptin
              Dosage: As prescribed by a healthcare provider, typically once or
              twice daily
            </Text>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Monitor blood sugar levels regularly, at least 2-3 times a
                day. {'\n'}• Maintain a balanced diet, focusing on low glycemic
                index foods and avoiding sugary snacks.{'\n'}• Ensure adequate
                hydration and aim for at least 7-8 hours of sleep per night.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <CustomBottomNav
        type="Other"
        onPress={() => navigation.navigate('Home', {uid: uid})}
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
      />
    </View>
  );
};

export default BloodSugarPres;

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
    paddingBottom: 100,
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
