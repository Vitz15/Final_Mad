import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GerdImage} from '../../../assets/icon/Symptoms';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const GerdCard = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <GerdImage style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.symptomContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Gerd</Text>
            <Gap height={21} />
            <View style={styles.reasonContainer}>
              <View style={styles.selection}>
                <Text style={styles.reasonText}>
                  • Hearthburn or burning sensation in the chest. {'\n'}•
                  Regurgitation of food or sour liquid.{'\n'}• Difficulty
                  swallowing. {'\n'}• Coughing or wheezing, especially at night.
                  {'\n'}• Sore throat or hoarseness. {'\n'}• Chest pain or
                  discomfort.
                  {'\n'}• Nausea.{'\n'}• Feeling of a lump in the throat.{'\n'}•
                  Bad breath
                </Text>
              </View>
            </View>
            <Gap height={21} />
            <Text style={styles.symptomTitle}>Gerd can be caused by :</Text>
            <Gap height={21} />
            <Text style={styles.symptomText}>
              Weak lower esophageal sphincter, Obesity, Hiatal hernia,
              Pregnancy, Smoking Certain medications, Eating large meals, Lying
              down after eating, Consumption of acidic or spicy foods, Alcohol
              or caffeine intake
            </Text>
          </View>
        </View>
      </View>
      <CustomBottomNav
        type="Other"
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
        onPress={() => navigation.navigate('Home', {uid: uid})}
      />
    </View>
  );
};

export default GerdCard;

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
    paddingBottom: 220,
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
