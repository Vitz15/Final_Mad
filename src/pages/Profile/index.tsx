import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Top from '../../components/molecules/Top';
import {Picture} from '../../assets/icon';

const Profile = () => {
  return (
    <View>
      <Top type="profile" />
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Picture width={100} height={200} style={styles.backgroundImage}/>
        </View>
        <View style={styles.profileContainer}>
          <Picture style={styles.profileImage} />
          <Text style={styles.profileName}>John Doe</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    width: 1000,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});
