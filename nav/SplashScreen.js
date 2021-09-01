import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';
import {BlurView, VibrancyView} from '@react-native-community/blur';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <LinearGradient
      colors={['#B66961', '#eddab9', '#B66961']}
      start={{x: 0.5, y: 0.1}}
      end={{x: 1, y: 0.9}}
      style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={{
            uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896664/FreeIn/logo-2048_oykatl.png',
          }}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textSign}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <BlurView
          styles={styles.blur}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      </Animatable.View>
    </LinearGradient>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    alignContent: 'center',
    padding: 10,
    borderWidth: 2,
    width: 150,
    borderRadius: 50,
    borderColor: 'rgba(45,46,130,1)',
  },
  textSign: {
    color: 'rgba(45,46,130,1)',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  blur: {
    flex: 1,
    position: 'absolute',
    width: height * 0.28,
    height: height * 0.28,
    alignSelf: 'center',
  },
});
