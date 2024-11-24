import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Diptheria as Dipth} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const Diptheria = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <Dipth style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Diptheria</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              Diphtheria is a contagious disease that can be spread through
              coughing, sneezing, or open wounds. Symptoms include sore throat
              and breathing difficulties. The primary cause of diphtheria is an
              infection by the bacterium Corynebacterium diphtheriae, which
              attacks the mucous membranes in the nose and throat, and it can
              also affect the skin. This disease can affect people of all ages
              and poses a risk of serious infection that can be
              life-threatening. Treatment includes antibiotics and antitoxins to
              eliminate the bacteria.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Pittara:
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Antibiotics (e.g., Penicillin, Erythromycin),
              Antitoxin for diphtheria{'\n'}Dosage: As prescribed by a
              healthcare provider; antibiotics typically administered daily,
              while antitoxin dosage depends on severity and is given to
              neutralize toxins
            </Text>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Follow treatment schedule, take antibiotics exactly as
                prescribed to ensure the complete elimination of the bacteria.
                Do not skip doses.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Gap height={46} />
      <CustomBottomNav
        type="Other"
        onPress={() => navigation.navigate('Home', {uid: uid})}
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
      />
    </View>
  );
};

export default Diptheria;

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
