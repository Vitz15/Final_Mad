import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Top from '../../components/molecules/Top';
import {Picture} from '../../assets/icon';

import {getDatabase, ref, onValue, update} from 'firebase/database';
import {getAuth} from 'firebase/auth';

import {Button, Gap} from '../../components/atoms/';

import CustomBottomNav from '../../components/molecules/NavBar';

const Profile = ({navigation, route}) => {
  const {uid} = route.params;

  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const auth = getAuth();
  const db = getDatabase();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(db, 'users/' + uid);
      onValue(userRef, snapshot => {
        const data = snapshot.val();
        if (data) {
          setUserData(data);
          setUsername(data.username);
        } else {
          console.log('No user data found');
        }
      });
    } else {
      console.log('User is not authenticated');
    }
  }, []);
  const handleSave = () => {
    const userRef = ref(db, 'users/' + uid);
    update(userRef, {
      username: username,
    })
      .then(() => {
        setIsEditing(false);
        setUserData(prevData => ({...prevData, username}));
        alert('Profile updated successfully!');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile.');
      });
  };

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <Top type="profile" text="User Profile" backgroundColor='#ffffff'/>
        <View style={styles.profileContainer}>
          <Picture style={styles.profileImage} />
          <Text style={styles.profileName}>{userData.username}</Text>
        </View>

        <View style={styles.information}>
          <Text style={styles.title}>Your Information</Text>
          <View style={styles.containerdata}>
            <Text style={styles.dataName}>Username</Text>
            {isEditing ? (
              <TextInput
                style={styles.data}
                value={username}
                onChangeText={setUsername}
              />
            ) : (
              <Text style={styles.data}>{userData.username}</Text>
            )}

            <View style={styles.line} />

            <Text style={styles.dataName}>Full Name</Text>
            <Text style={styles.data}>{userData.fullName}</Text>

            <View style={styles.line} />

            <Text style={styles.dataName}>Email Address</Text>
            <Text style={styles.data}>{userData.email}</Text>

            <View style={styles.line} />
          </View>

          <Gap height={20} />

          <Button
            type="normal"
            text={isEditing ? 'Save Changes' : 'Update Profile'}
            textColor="white"
            onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
          />
        </View>
      </View>

      <CustomBottomNav
        type="Profile"
        onPress={() => navigation.navigate('Home', {uid: uid})}
        onPress2={() => navigation.navigate('Profile', {uid: uid})}
      />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#78C194',
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#78C194',
    paddingVertical: 30,
  },
  profileImage: {
    marginTop: 25,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 5,
  },
  profileName: {
    fontFamily: 'SF-Display-Pro-Bold',
    marginTop: 15,
    fontSize: 20,
    color: 'black',
  },
  information: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 125,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Medium',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 30,
  },
  containerdata: {
    marginTop: 38,
  },
  dataName: {
    fontFamily: 'SF-Display-Pro-Medium',
    fontSize: 16,
    color: 'black',
    marginLeft: 35,
  },
  data: {
    fontFamily: 'SF-Display-Pro-Regular',
    fontSize: 14,
    color: 'black',
    marginLeft: 43,
    marginTop: 20,
  },

  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 7,
    marginHorizontal: 24,
  },
});
