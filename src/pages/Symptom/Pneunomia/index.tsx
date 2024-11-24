import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Pneunomiaimage} from '../../../assets/icon';
import {Gap} from '../../../components/atoms';
import CustomBottomNav from '../../../components/molecules/NavBar';

const PneunomiaCard = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardImageContainer}>
        <Pneunomiaimage style={styles.cardImage} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <View style={styles.symptomContainer}>
            <Gap height={34} />
            <Text style={styles.title}>Pneunomia</Text>
            <Gap height={21} />
            <View style={styles.reasonContainer}>
              <View style={styles.selection}>
                <Text style={styles.reasonText}>
                  • Cough, often persistent, may produce mucus or blood. {'\n'}•
                  Shortness of breath, difficulty breathing even with light
                  activity.{'\n'}• Chest pain, sharp or stabbing pain when
                  taking deep breaths or coughing. {'\n'}• Fever, elevated body
                  temperature, often above 38°C (100.4°F).
                  {'\n'}• Chills and sweating, feeling cold followed by episodes
                  of sweating. {'\n'}• Fatigue, extreme tiredness and weakness.
                  {'\n'}• Loss of appetite, reduced desire to eat.{'\n'}•
                  Confusion or mental changes, especially common in older adults
                  or those with weakened immune systems.{'\n'}• Muscle aches,
                  general discomfort or soreness in muscles.{'\n'}• Bluish skin
                  or lips, in severe cases due to lack of oxygen.
                </Text>
              </View>
            </View>
            <Gap height={21} />
            <Text style={styles.symptomTitle}>
              Pneunomia can be caused by :
            </Text>
            <Gap height={21} />
            <Text style={styles.symptomText}>
              Viral infections, Bacterial infections, Fungal infections,
              Aspiration, Weak immune system, Inhalation of toxic substances,
              Underlying chronic diseases, Environmental factors
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

export default PneunomiaCard;

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
    paddingBottom: 88,
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
