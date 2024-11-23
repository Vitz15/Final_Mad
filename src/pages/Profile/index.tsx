import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Top from '../../components/molecules/Top';
import {Picture} from '../../assets/icon';
import {getDatabase, ref, onValue, update} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import {Button, Gap} from '../../components/atoms/';
import CustomBottomNav from '../../components/molecules/NavBar';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const Profile = ({navigation, route}) => {
  const {uid} = route.params;

  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');
  const [isEditing, setIsEditing] = useState(false);
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
          setUserData(data);
          setUsername(data.username);
          setPhoto(data.photo || null); 
        } else {
          console.log('No user data found');
        }
      });
    } else {
      console.log('User is not authenticated');
    }
  }, [uid]);

  const handleSave = () => {
    const userRef = ref(db, 'users/' + uid);
    const updates = {
      username: username,
    };
    if (photo) {
      updates.photo = photo; 
    }

    update(userRef, updates)
      .then(() => {
        setIsEditing(false);
        setUserData(prevData => ({...prevData, username, photo}));
        alert('Profile updated successfully!');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile.');
      });
  };

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo', quality: 0.5}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const selectedPhoto = response.assets[0].uri;
        setPhoto(selectedPhoto);
        convertImageToBase64(selectedPhoto);
      }
    });
  };

  const convertImageToBase64 = uri => {
    RNFS.readFile(uri, 'base64')
      .then(base64String => {
        setPhoto(base64String); 
        saveImageToDatabase(base64String); 
      })
      .catch(error => {
        console.error('Error converting image to base64:', error);
      });
  };

  const saveImageToDatabase = base64Image => {
    const userRef = ref(db, 'users/' + uid);
    update(userRef, {photo: base64Image})
      .then(() => {
        console.log('Image successfully uploaded to Realtime Database!');
        onValue(userRef, snapshot => {
          const data = snapshot.val();
          if (data) {
            setUserData(data);
            setPhoto(data.photo); 
          }
        });
      })
      .catch(error => {
        console.error('Error uploading image to Realtime Database:', error);
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
        <Top type="profile" text="User Profile" backgroundColor="#ffffff" />
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={pickImage}>
            {photo ? (
              <Image
                source={{uri: `data:image/jpeg;base64,${photo}`}}
                style={styles.profileImage}
              />
            ) : (
              <Picture style={styles.profileImage} />
            )}
          </TouchableOpacity>
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
    width: 100,
    height: 100,
    borderRadius: 50,
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
