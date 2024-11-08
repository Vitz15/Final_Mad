import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button} from '../../components/atoms'
import { Header } from '../../components/molecules'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})