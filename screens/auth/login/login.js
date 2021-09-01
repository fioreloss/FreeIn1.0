import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Octicons from 'react-native-vector-icons/Octicons';

//Media
import logoText from '../../../Assets/freeinText.png';
import LinearGradient from 'react-native-linear-gradient';

//Backend
import {useDispatch} from 'react-redux';
import * as authActions from '../../../store/actions/auth';

//Components
import AppButton from '../../../components/AppButton';
import Inputs from '../../../components/Inputs';
import LoginTxt from '../../../components/LoginTxt';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

export default function Login({navigation}) {
  const [showPassword, setShowPassword] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const signInHandler = async () => {
    const action = authActions.login(email, password);
    try {
      await dispatch(action);
      console.log('mori te dhenat');
      navigation.navigate('AppContainer');
    } catch (err) {
      console.log('nuk mori te dhena');
    }
  };

  return (
    <LinearGradient
      colors={['#B66961', '#eddab9', '#B66961']}
      start={{x: 0.5, y: 0.1}}
      end={{x: 1, y: 0.9}}
      style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896664/FreeIn/logo-2048_oykatl.png',
              }}
              style={styles.logo}
            />
          </View>
          <View style={styles.welcomeView}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Image source={logoText} style={styles.freeInImage} />
          </View>
          <Inputs
            name="user"
            placeholder="Username"
            onChangeText={setEmail}
            value={email}
            color={'rgba(45,46,130,1)'}
          />
          <View>
            <Inputs
              name="lock"
              placeholder="Password"
              secureTextEntry={showPassword}
              onChangeText={setPassword}
              value={password}
              color={'rgba(45,46,130,1)'}
            />
            <TouchableOpacity
              style={styles.btnEye}
              onPress={() => {
                setShowPassword(prev => !prev);
              }}>
              <Octicons
                name={'eye-closed'}
                size={20}
                color={'rgba(45,46,130,1)'}
                name={showPassword ? 'eye-closed' : 'eye'}
              />
            </TouchableOpacity>
          </View>
          <AppButton onPress={signInHandler} title="Login" />
          <LoginTxt />
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: HEIGHT,
    width: WIDTH,
  },

  //Logo view style
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 60,
  },

  logo: {
    width: WIDTH * 0.4,
    height: HEIGHT * 0.2,
  },

  //Welcome View Style
  welcomeView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'rgba(45,46,130,1)',
    fontSize: 25,
    fontWeight: '700',
  },
  freeInImage: {
    width: 150,
    height: 50,
  },

  btnEye: {
    position: 'absolute',
    top: 30,
    right: 40,
  },
});
