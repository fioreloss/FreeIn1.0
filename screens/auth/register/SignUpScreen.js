import React from 'react';
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
} from 'react-native';
import {Button} from 'react-native-elements';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useDispatch} from 'react-redux'; //dispatch actions like singUp actions
import * as authActions from '../../../store/actions/auth';

import AppButton from '../../../components/AppButton';
import InputsSignUp from '../../../components/InputsSignUp';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const SignUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    userName: '',
    emailId: '',
    firstName: '',
    lastName: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const dispatch = useDispatch();

  const signUpHandler = async () => {
    const action = authActions.signup(
      data.userName,
      data.emailId,
      data.firstName,
      data.lastName,
      data.password,
    );
    try {
      await dispatch(action);
      console.log(' Sign Up mori te dhenat');
      //navigation.navigate('Login');
    } catch (err) {
      console.log('Sign Up nuk mori te dhena');
      console.log(authActions.resData.data);
    }
  };

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        userName: val,
        emailId: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        userName: val,
        emailId: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <LinearGradient
      colors={['#c94d22', '#e6845e']}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container1}>
              <InputsSignUp
                name="user"
                placeholder="userName"
                placeholderTextColor="#ebf2f7"
                color="#ebf2f7"
                // onChangeText={val => textInputChange(val)}
                textInputChange={textInputChange}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn" style={styles.btnEye}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            <View>
              <InputsSignUp
                name="mail"
                placeholder="Your e-mail"
                placeholderTextColor="#ebf2f7"
                color="#ebf2f7"
                textInputChange={textInputChange}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn" style={styles.btnEye}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            <View style={styles.container1}>
              <InputsSignUp
                name="user"
                placeholder="firstName"
                placeholderTextColor="#ebf2f7"
                color="#ebf2f7"
                // onChangeText={val => textInputChange(val)}
                textInputChange={textInputChange}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn" style={styles.btnEye}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            <View style={styles.container1}>
              <InputsSignUp
                name="user"
                placeholder="lastName"
                placeholderTextColor="#ebf2f7"
                color="#ebf2f7"
                // onChangeText={val => textInputChange(val)}
                textInputChange={textInputChange}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn" style={styles.btnEye}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            <View>
              <InputsSignUp
                name="lock"
                placeholder="Your Password"
                placeholderTextColor="#ebf2f7"
                color="#ebf2f7"
                secureTextEntry={data.secureTextEntry ? true : false}
                // onChangeText={val => handlePasswordChange(val)}
                textInputChange={handlePasswordChange}
              />
              <TouchableOpacity
                onPress={updateSecureTextEntry}
                style={styles.btnEye}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="#ebf2f7" size={20} />
                ) : (
                  <Feather name="eye" color="#ebf2f7" size={20} />
                )}
              </TouchableOpacity>
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
              <AppButton title="SignUp" onPress={signUpHandler} />
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
                  marginBottom: 10,
                }}
                icon={<Feather name="arrow-right" size={30} color="white" />}
                title=""
                onPress={() => navigation.navigate('UserInfo')}
              />
              <Text style={styles.color_textPrivate}>
                Do u have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.backSignin]}>Sign IN</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container1: {
    // flex: 1,
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
    color: 'white',
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
