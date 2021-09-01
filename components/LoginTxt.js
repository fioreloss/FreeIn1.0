import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Thirdpartylogin from './Thirdpartylogin';

export default function LoginTxt() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{marginTop: 5, alignItems: 'center'}}>
        <Text style={styles.welcomeText}>Or</Text>
        <Text style={styles.welcomeText}>Login with</Text>
      </View>
      <View style={styles.thirdPartyContainer}>
        <Thirdpartylogin
          image={{
            uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896598/FreeIn/facebook_jwqypj.png',
          }}
        />
        <Thirdpartylogin
          image={{
            uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896598/FreeIn/facebook_jwqypj.png',
          }}
        />
        <Thirdpartylogin
          image={{
            uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896598/FreeIn/facebook_jwqypj.png',
          }}
        />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.textRegister}>
          Dont have an Account yet? Register{'  '}
        </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.registerNavigation}>
            Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  welcomeText: {
    color: 'rgba(45,46,130,1)',
    fontSize: 25,
    fontWeight: '700',
  },
  thirdPartyContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  registerContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRegister: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
  registerNavigation: {
    color: 'rgba(45,46,130,1)',
    fontSize: 15,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
