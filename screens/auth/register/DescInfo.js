import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import LinearGradient from 'react-native-linear-gradient';

export default function DescInfo({navigation}) {
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#CC8769', '#FCF4E6', '#B66961']}
        start={{x: 0.5, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.BigView}>
        <View>
          <Image
            style={styles.Girl}
            source={{
              uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896568/FreeIn/girl_v7h4pl.png',
            }}
          />
        </View>
        <View style={styles.SecondView}>
          <Text style={styles.FirstText}>
            Freein il primo vero {'\n'} Social Travel {'\n'} che ti premia.
          </Text>
          <Text style={styles.SecondText}>
            Freein ti premia {'\n'}
            {'\n'}
            Crea e condividi il tuo itinerario e guadagnerai
            {'\n'}
            ogni volta che i tuoi amici lo salveranno {'\n'}
            {'\n'}
            Potrai spendere i tuoi crediti scegliendo le tappe {'\n'}
            che ti ispirano di più. {'\n'}
            {'\n'}
            Se sei un’azienda turistica potrai utilizzare i tuoi {'\n'}
            crediti sponsorizzando la tua attività.
          </Text>
          <Button
            containerStyle={{
              width: 60,
              alignSelf: 'center',
              marginTop: 30,
            }}
            buttonStyle={{
              borderRadius: 50,
              backgroundColor: '#fa5c00',
              height: 60,
              marginBottom: 0,
            }}
            icon={<Feather name="arrow-right" size={30} color="white" />}
            title=""
            onPress={() => navigation.navigate('YourProfile')}
          />
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  BigView: {
    height: '100%',
    // backgroundColor: '#F4DECB',
  },
  SecondView: {
    alignItems: 'flex-end',
    textAlign: 'right',
    alignSelf: 'stretch',
    marginTop: -80,
    marginRight: 30,
    fontFamily: 'montserrat',
  },
  FirstText: {
    textAlign: 'right',
    alignSelf: 'stretch',
    fontFamily: 'montserrat',
    color: '#032689',
    fontSize: 36,
    fontWeight: '700',
  },

  SecondText: {
    textAlign: 'right',
    alignSelf: 'stretch',
    color: '#032689',
    fontFamily: 'montserrat',
    fontSize: 16,
  },
});
