import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Top from '../../components/molecules/Top';
import LottieView from 'lottie-react-native';
import {Picker} from '@react-native-picker/picker';
import CustomBottomNav from '../../components/molecules/NavBar';

const HealthRoutine = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Top />
      <ScrollView
        style={styles.routineContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <LottieView
          source={require('../../assets/icon/Meditate.json')}
          style={{width: 300, height: 300}}
          autoPlay
        />
        <Text style={styles.title}>Settle Yourself With Meditation</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Have you tried meditating?</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>
        </View>
        <LottieView
          source={require('../../assets/icon/Water.json')}
          style={{width: 300, height: 300}}
          autoPlay
        />
        <Text style={styles.title}>Try To Drink 15 Cups of Water A Day</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>How Many did you drink?</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
          </Picker>
        </View>
        <LottieView
          source={require('../../assets/icon/food.json')}
          style={{width: 300, height: 300}}
          autoPlay
        />
        <Text style={styles.title}>Balanced Eating Is Important</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>How many did you eat today?</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
          </Picker>
        </View>
        <LottieView
          source={require('../../assets/icon/exercise.json')}
          style={{width: 300, height: 300}}
          autoPlay
        />
        <Text style={styles.title}>Routine Exercise Makes You Healthy</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Have you exercise today?</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="yes" value="yes" />
            <Picker.Item label="no" value="no" />
          </Picker>
        </View>
        <LottieView
          source={require('../../assets/icon/sleep.json')}
          style={{width: 300, height: 300}}
          autoPlay
        />
        <Text style={styles.title}>Sleep Early Wake Up Early</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            when did you sleep last night?
          </Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="6.00PM" value="6" />
            <Picker.Item label="7.00PM" value="7" />
            <Picker.Item label="8.00PM" value="8" />
            <Picker.Item label="9.00PM" value="9" />
            <Picker.Item label="10.00PM" value="10" />
            <Picker.Item label="11.00PM" value="11" />
            <Picker.Item label="12.00PM" value="12" />
          </Picker>
        </View>
      </ScrollView>
      <CustomBottomNav
        type="Other"
        onPress2={() => navigation.navigate('Profile')}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default HealthRoutine;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  routineContainer: {
    backgroundColor: 'white',
    flexGrow: 0,
    maxHeight: '78%',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 22,
    color: 'black',
    marginVertical: 15,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  questionText: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 18,
    color: 'black',
    marginRight: 10,
  },
  picker: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
