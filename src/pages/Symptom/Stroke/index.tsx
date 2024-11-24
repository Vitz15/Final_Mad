import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StrokeImage} from '../../../assets/icon/Symptoms';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const StrokeCard = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <StrokeImage style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.symptomContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Stroke</Text>
            <Gap height={21} />
            <View style={styles.reasonContainer}>
              <View style={styles.selection}>
                <Text style={styles.reasonText}>
                  • Sudden numbness or weakness in the face, arm, or leg,
                  especially on one side of the body.
                  {'\n'}• Confusion, trouble speaking, or understanding speech.
                  {'\n'}• Trouble seeing in one or both eyes. {'\n'}• Difficulty
                  walking, dizziness, loss of balance or coordination.
                  {'\n'}• Sudden severe headache with no known cause. {'\n'}•
                  Nausea or vomiting (especially with a hemorrhagic stroke).
                  {'\n'}• Difficulty swallowing or drooping on one side of the
                  face.
                </Text>
              </View>
            </View>
            <Gap height={21} />
            <Text style={styles.symptomTitle}>Stroke can be caused by :</Text>
            <Gap height={21} />
            <Text style={styles.symptomText}>
              Blocked blood flow (ischemic stroke), Burst blood vessel
              (hemorrhagic stroke), High blood pressure, Heart disease,
              Diabetes, Smoking, Excessive alcohol consumption, High
              cholesterol, Sedentary lifestyle, Family history of stroke.
            </Text>
          </View>
        </View>
      </View>
      <CustomBottomNav
        type="Other"
        onPress2={() => navigation.navigate('Profile')}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default StrokeCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    paddingBottom: 170,
  },
  title: {
    marginTop: 10,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 20,
    color: '#333',
  },
  symptomContainer: {
    width: '100%',
    marginBottom: 15,
  },
  symptomTitle: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 16,
    color: '#333',
  },
  symptomText: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    color: '#555',
  },
  reasonContainer: {
    width: '100%',
  },
  reasonTitle: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 16,
    color: '#333',
  },
  reasonText: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 14,
    color: '#555',
  },
  selection: {
    paddingHorizontal: 8,
  },
});
