import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import {Button} from 'react-native-elements';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

import {useDispatch} from 'react-redux'; //dispatch actions like singUp actions
import * as authActions from '../../../store/actions/auth';

import AppButton from '../../../components/AppButton';
import Inputs from '../../../components/Inputs';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const Register = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [userName, setUserName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signUpHandler = async () => {
    const action = authActions.signup(
      userName,
      emailId,
      firstName,
      lastName,
      password,
    );
    try {
      await dispatch(action);
      Alert.alert(
        'Great!',
        'You just registrated! Complete your profile now!',
        [{text: '😊 OK', onPress: () => navigation.navigate('Login')}],
      );
      console.log('SignUp mori te dhena');
    } catch (err) {
      console.log('Sign Up nuk mori te dhena');
    }
  };

  return (
    <LinearGradient
      colors={['#c94d22', '#e6845e']}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" barStyle="light-content" />

          <View style={styles.header}>
            <FontAwesome
              name="user-circle-o"
              size={80}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.text_header1}>
              CREATE <Text style={styles.text_header}>ACCOUNT</Text>
            </Text>
            <View style={styles.underLine} />
          </View>

          <ScrollView>
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.container1}>
                <Inputs
                  name="user"
                  placeholder="Your username!"
                  onChangeText={setUserName}
                  value={userName}
                  color={'rgba(45,46,130,1)'}
                />
              </View>
              <View style={styles.container1}>
                <Inputs
                  name="mail"
                  placeholder="Your email id!"
                  onChangeText={setEmailId}
                  value={emailId}
                  color={'rgba(45,46,130,1)'}
                />
              </View>
              <View style={styles.container1}>
                <Inputs
                  name="user"
                  placeholder="Your first name!"
                  onChangeText={setFirstName}
                  value={firstName}
                  color={'rgba(45,46,130,1)'}
                />
              </View>
              <View style={styles.container1}>
                <Inputs
                  name="user"
                  placeholder="Your last name!"
                  onChangeText={setLastName}
                  value={lastName}
                  color={'rgba(45,46,130,1)'}
                />
              </View>
              <View>
                <Inputs
                  name="lock"
                  placeholder="Your Password!"
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
              <AppButton title="SignUp" onPress={signUpHandler} />
            </View>

            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                By signing up you agree to our
              </Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Terms of service
              </Text>
              <Text style={styles.color_textPrivate}> and</Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Privacy policy
              </Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.color_textPrivate}>
                Do you have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.backSignin]}>Sign IN</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexDirection: 'column',
  },

  icon: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  header: {
    // flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingVertical: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  underLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: 150,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  text_header1: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },

  button: {
    alignItems: 'center',
    marginTop: 20,
  },

  backSignin: {
    color: '#3366ff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'center',
  },
  color_textPrivate: {
    color: 'white',
  },
  btnEye: {
    position: 'absolute',
    top: 30,
    right: 40,
  },
});
