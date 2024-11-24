import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AsthmaPres as Asma} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const AsthmaPres = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <Asma style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.prescriptionContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Asthma</Text>
            <Gap height={11} />
            <Text style={styles.prescriptionText}>
              Asthma is a chronic disease of the respiratory tract characterized
              by shortness of breath due to inflammation and narrowing of the
              airways. Asthma can affect people of all age groups, both young
              and old. People with asthma have more sensitive airways compared
              to those without the condition. When the lungs are exposed to
              asthma triggers, the muscles in the airways become tight, causing
              the airways to narrow. Additionally, mucus production increases.
              This combination of factors leads to asthma symptoms.
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionTitle}>
              Prescription by Dr. Pittara:
            </Text>
            <Gap height={21} />
            <Text style={styles.prescriptionText}>
              Medications: Salbutamol, Beclometasone, Montelukast, Fluticasone
              {'\n'}Dosage: As prescribed by a healthcare provider, typically as
              needed for reliever medication or once or twice daily for
              controller medication
            </Text>
          </View>

          <View style={styles.adviceContainer}>
            <Text style={styles.adviceTitle}>Doctor's Advise:</Text>
            <View style={styles.selection}>
              <Gap height={21} />
              <Text style={styles.adviceText}>
                • Use the inhaler as prescribed, ensuring proper technique to
                maximize effectiveness.{'\n'}• Always carry a reliever inhaler
                (e.g., Salbutamol) in case of sudden asthma symptoms or attacks.
                {'\n'}• Avoid triggers such as smoke, dust, strong odors, and
                allergens that may worsen asthma symptoms.
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

export default AsthmaPres;

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
    marginLeft: 5,
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
