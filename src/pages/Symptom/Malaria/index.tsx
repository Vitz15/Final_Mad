import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MalariaImage} from '../../../assets/icon/Symptoms';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const MalariaCard = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <MalariaImage style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.symptomContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Malaria</Text>
            <Gap height={21} />
            <View style={styles.reasonContainer}>
              <View style={styles.selection}>
                <Text style={styles.reasonText}>
                  • Fever with chills.
                  {'\n'}• Sweating.{'\n'}• Headache. {'\n'}• Muscle and joint
                  aches.
                  {'\n'}• Jaundice (yellowing of the skin and eyes). {'\n'}•
                  Shivering or cold feeling followed by high fever
                </Text>
              </View>
            </View>
            <Gap height={21} />
            <Text style={styles.symptomTitle}>Malaria can be caused by :</Text>
            <Gap height={21} />
            <Text style={styles.symptomText}>
              Parasite infection (Plasmodium spesies), Mosquito bites (Anopheles
              mosquitoes), Travel to areas with malaria prevalence, Weak Immune
              system, Lack of proper malaria prevention measures, Contaminated
              blood transfusion (rare), Mother to child transmission (in rare
              cases).
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

export default MalariaCard;

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
    paddingBottom: 255,
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
