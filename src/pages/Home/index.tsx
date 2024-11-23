// Home.js
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Top from '../../components/molecules/Top';
import {Menu} from '../../components/molecules';
import {MiniBox, Gap} from '../../components/atoms';
import {HealthR, Virus} from '../../assets/icon';
import {Trans} from '../../assets/icon';
import {OrderM} from '../../assets/icon';
import {Presc} from '../../assets/icon';
import {Symp} from '../../assets/icon';
import {About} from '../../assets/icon';
import {getDatabase, ref, onValue} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import CustomBottomNav from '../../components/molecules/NavBar';

const Home = ({navigation, route}) => {
  const {uid} = route.params;
  const [userName, setUsername] = useState(null);
  const [photo, setPhoto] = useState(null);

  const auth = getAuth();
  const db = getDatabase();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(db, 'users/' + uid);
      onValue(userRef, snapshot => {
        const data = snapshot.val();
        if (data) {
          setUsername(data.username);
          if (data.photoBase64) {
            setPhoto(`data:image/jpg;base64,${data.photoBase64}`);
          } else {
            setPhoto(data.photoURL);
          }
        } else {
          console.log('No user data found');
        }
      });
    } else {
      console.log('User is not authenticated');
    }
  }, [uid]);

  const isDataLoaded = userName && photo;

  return (
    <View style={styles.page}>
      {isDataLoaded ? (
        <Top name={userName} photo={photo} />
      ) : (
        <Text>Loading...</Text>
      )}

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Gap height={35} />
        <View style={styles.iconContainer}>
          <MiniBox
            text="Health Routine"
            icon={HealthR}
            onPress={() => navigation.navigate('HealthRoutine', {uid: uid})}
          />
          <MiniBox
            text="Transaction"
            icon={Trans}
            onPress={() => navigation.navigate('Cart')}
          />
          <MiniBox
            text="Virus List"
            icon={Virus}
            onPress={() => navigation.navigate('Virus', {uid: uid})}
          />
        </View>
        <View style={styles.menuContainer}>
          <Gap height={11} />
          <Menu
            icon={OrderM}
            onPress={() => navigation.navigate('OrderMedicine', {uid: uid})}
          />
          <Gap height={24} />
          <Menu
            icon={Presc}
            label="Prescription"
            onPress={() => navigation.navigate('Threat', {uid: uid})}
          />
          <Gap height={24} />
          <Menu
            icon={Symp}
            label="Check Your Symptom"
            onPress={() => navigation.navigate('Sickness', {uid: uid})}
          />
          <Gap height={24} />
          <Menu
            icon={About}
            label="About Us"
            onPress={() => navigation.navigate('About', {uid: uid})}
          />
        </View>
      </ScrollView>
      <CustomBottomNav
        type="Home"
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flexGrow: 0,
    maxHeight: '100%',
    backgroundColor: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
  profileText: {
    fontSize: 16,
    color: 'gray',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  menuContainer: {
    backgroundColor: 'white',
  },
});

export default Home;
