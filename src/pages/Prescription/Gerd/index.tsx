import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Diptheria as Dipth, Gerdpres as GerdP} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const GerdPres = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <GerdP style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Gerd</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              Gastric acid disease is a condition characterized by a burning
              sensation in the chest due to stomach acid rising into the
              esophagus. Symptoms of gastric acid disease occur at least twice a
              week. Stomach acid reflux or gastric acid disease can be
              experienced by both adults and children. The symptoms of this
              stomach condition are often mistaken for a heart attack or
              coronary heart disease, because the symptoms are almost similar,
              such as left-sided chest pain.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Pittara:
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Antacids (e.g., Tums, Mylanta), H2-receptor
              antagonists (e.g., Ranitidine, Famotidine), Proton pump inhibitors
              (e.g., Omeprazole, Esomeprazole), Prokinetics (e.g.,
              Metoclopramide){'\n'}Dosage: As prescribed by a healthcare
              provider, typically taken before meals or as needed for symptom
              relief
            </Text>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Take medications as directed, use medications to reduce
                stomach acid production or neutralize it, based on your doctor’s
                prescription.{'\n'}• Eat smaller, more frequent meals: avoid
                large meals, which can trigger acid reflux. Eat smaller meals to
                ease digestion.
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

export default GerdPres;

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
