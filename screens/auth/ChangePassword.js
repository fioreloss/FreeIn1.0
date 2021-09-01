import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

import {useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/auth';
import AppButton from '../../components/AppButton';
import InputsChangePass from '../../components/InputsChangePass';
import LinearGradient from 'react-native-linear-gradient';


const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ChangePassword = () => {
  const [email, setEmail] = useState('');

  const [showOldPassword, setShowOldPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);

  const [oldPassword, setoldPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');

  const dispatch = useDispatch();

  const changePasswordHandler = async () => {
    const action = authActions.ChangePassword(email, oldPassword, newPassword);
    try {
      await dispatch(action);
      console.log('pass u arrit');
    } catch (err) {
      console.log('pass nuk u arrit');
      console.log(err);
    }
  };

  return (
    <LinearGradient
      colors={['#B66961', '#eddab9', '#B66961']}
      start={{x: 0.5, y: 0.1}}
      end={{x: 1, y: 0.9}}
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Feather name="unlock" style={styles.logo} />
        </View>
        {/* <View style={styles.inputContainer}>
          <InputsChangePass
            name="user"
            placeholder="Your e-mail"
            placeholderTextColor="#ebf2f7"
            color={'rgba(45,46,130,1)'}
            onChangeText={setEmail}
            value={email}
          />
        </View> */}
        <View style={styles.inputContainer}>
          <InputsChangePass
            name="lock"
            placeholder="Old Password"
            placeholderTextColor="#ebf2f7"
            color='rgba(45,46,130,1)'
            secureTextEntry={showOldPassword}
            onChangeText={setoldPassword}
            value={oldPassword}
          />
          <TouchableOpacity
            style={styles.btnEye}
            onPress={() => {
              setShowOldPassword(prev => !prev);
            }}>
            <Octicons
              name={'eye-closed'}
              size={20}
              color={'rgba(45,46,130,1)'}
              name={showOldPassword ? 'eye-closed' : 'eye'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
        <InputsChangePass
            name="lock"
            placeholder="New Password"
            placeholderTextColor="#ebf2f7"
            color='rgba(45,46,130,1)'
            secureTextEntry={showNewPassword}
            onChangeText={setnewPassword}
            value={newPassword}
          />
          <TouchableOpacity
            style={styles.btnEye}
            onPress={() => {
              setShowNewPassword(prev => !prev);
            }}>
            <Octicons
              name={'eye-closed'}
              size={20}
              color={'rgba(45,46,130,1)'}
              name={showNewPassword ? 'eye-closed' : 'eye'}
            />
          </TouchableOpacity>
        </View>
        
        <AppButton title="Change Password" onPress={changePasswordHandler} />
      </View>
    </LinearGradient>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: HEIGHT,
  },

  logoContainer: {
    alignItems: 'center',
    margin:20
  },

  logo: {
    
    marginTop:20,
    fontSize: 100,
    color: "white",
    opacity: 0.6,
  },

  inputContainer: {
    marginTop: 25,
  },

  btnEye: {
    position: 'absolute',
    top: 24,
    right: 45,
  },
  

});