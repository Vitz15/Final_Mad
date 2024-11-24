import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CSFLeak, Diptheria as Dipth} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const CSFPres = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <CSFLeak style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>CSF Leak</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              Cerebrospinal fluid (CSF) surrounds the brain and spinal cord and
              provides a cushion to protect them from injury. There are three
              layers that surround the spinal cord and brain. When there is a
              hole or tear in the outermost layer, a CSF leak occurs. The hole
              or tear in this outer layer, called the dura mater, allows some of
              the fluid to escape.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Bernard R. Bendok, M.D :
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Pain relievers (e.g., Acetaminophen, Ibuprofen),
              Caffeine, Epidural blood patch (if necessary){'\n'}Dosage: As
              prescribed by a healthcare provider; typically, pain relievers as
              needed for discomfort, caffeine to help increase CSF production,
              and an epidural blood patch if advised by a doctor for CSF leak
              treatment.
            </Text>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Rest, avoid strenuous activities or sudden movements that
                could worsen the leak.{'\n'}• Monitor symptoms, if you
                experience severe headache, nausea, or vision changes, seek
                immediate medical attention.{'\n'}• Consider an epidural blood
                patch, if symptoms persist, an epidural blood patch may be
                necessary to seal the tear and prevent further fluid loss.
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

export default CSFPres;

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
