import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {TopRight, BottomLeft, BottomRight, TopLeft} from '../../assets/icon';
import {
  Hiv,
  Hepatitis,
  Herpes,
  Rabies,
  Pollo,
  Papilloma,
  Mumps,
  Lassa,
  Chikungunya,
  Rota,
  Noro,
  Zika,
  Chickenpox,
} from '../../assets/icon/virus';
import {Button, Gap} from '../../components/atoms';

const Virus = ({navigation}) => {
  return (
    <ScrollView>
      <Button
        style={styles.title}
        text="Virus List"
        type="arrow-back"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.container}>
        <Hiv style={styles.virusLeft} />
        <Text style={styles.textLeft}>HIV</Text>
        <TopRight style={styles.left} />

        <Hepatitis style={styles.virusRight} />
        <Text style={styles.textRight}>HEPATITIS</Text>
        <BottomLeft style={styles.right} />
      </View>
      <Gap height={6} />
      <View style={styles.container}>
        <Herpes style={styles.virusLeft} />
        <Text style={styles.textLeft}>HERPES</Text>
        <BottomRight style={styles.left} />
        <Rabies style={styles.virusRight} />
        <Text style={styles.textRight}>RABIES</Text>
        <TopLeft style={styles.right} />
      </View>
      <Gap height={6} />
      <View style={styles.container}>
        <Pollo style={styles.virusLeft} />
        <Text style={styles.textLeft}>POLLO</Text>
        <TopRight style={styles.left} />
        <Papilloma style={styles.virusRight} />
        <Text style={styles.textRight}>PAPILLOMA</Text>
        <BottomLeft style={styles.right} />
      </View>
      <Gap height={6} />
      <View style={styles.container}>
        <Mumps style={styles.virusLeft} />
        <Text style={styles.textLeft}>MUMPS</Text>
        <BottomRight style={styles.left} />
        <Lassa style={styles.virusRight} />
        <Text style={styles.textRight}>LASSA</Text>
        <TopLeft style={styles.right} />
      </View>
      <Gap height={6} />

      <View style={styles.container}>
        <Chikungunya style={styles.virusLeft} />
        <Text style={styles.textLeft}>CHIKUGUNYA</Text>
        <TopRight style={styles.left} />
        <Rota style={styles.virusRight} />
        <Text style={styles.textRight}>ROTA</Text>
        <BottomLeft style={styles.right} />
      </View>
      <Gap height={6} />
      <View style={styles.container}>
        <Noro style={styles.virusLeft} />
        <Text style={styles.textLeft}>NORO</Text>
        <BottomRight style={styles.left} />
        <Zika style={styles.virusRight} />
        <Text style={styles.textRight}>ZIKA</Text>
        <TopLeft style={styles.right} />
      </View>
      <View style={styles.container}>
        <Chickenpox style={styles.virusLast} />
        <Text style={styles.textLast}>
          Chickenpox Virus {'\n'}(Varicella Zoster Virus)
        </Text>
        <View style={styles.last} />
      </View>
    </ScrollView>
  );
};

export default Virus;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 24,
    alignItems: 'center',
    textShadowRadius: 2,
    textShadowColor: 'black',
    transform: [{translateX: 158}, {translateY: -45}],
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 16,
  },

  left: {
    transform: [{translateX: 17}, {translateY: 0}],
  },
  right: {
    transform: [{translateX: -13}, {translateY: 0}],
  },
  last: {
    width: 382,
    height: 106,
    backgroundColor: '#B2D5FE',
    borderRadius: 11,
    marginLeft: 15,
    marginTop: 9,
  },
  virusLeft: {
    position: 'absolute',
    left: 25,
    zIndex: 3,
  },
  virusRight: {
    position: 'absolute',
    left: 320,
    zIndex: 3,
  },
  textLeft: {
    position: 'absolute',

    left: 105,
    zIndex: 3,
    top: 29,
    textShadowRadius: 4,
    textShadowColor: 'black',
  },
  textRight: {
    position: 'absolute',
    left: 235,
    zIndex: 2,
    top: 29,
    textShadowRadius: 4,
    textShadowColor: 'black',
  },
  virusLast: {
    position: 'absolute',
    left: 25,
    zIndex: 3,
    top: 20,
  },

  textLast: {
    position: 'absolute',
    fontSize: 20,
    left: 135,
    zIndex: 3,
    top: 35,
    textShadowRadius: 4,

    textShadowColor: 'black',
  },
});
