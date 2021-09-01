export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const signup = (userName, emailId, firstName, lastName, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://freeindemo.euronet.aero/api/client/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apiSecretKey: 'x114a109114w119q99v104',
        },
        body: JSON.stringify({
          userName: userName,
          emailId: emailId,
          firstName: firstName,
          lastName: lastName,
          password: password,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Something went worng!');
    }
    const resData = await response.json();
    if (resData.Status === 400) {
      Alert.alert('Warning ⚠️', 'Complete All the fields');
    }

    dispatch({
      type: SIGNUP,
      userName: resData.Data.Username,
      emailId: resData.Data.Email,
    });
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://freeindemo.euronet.aero/api/client/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ApiSecretKey: 'x114a109114w119q99v104',
        },
        body: JSON.stringify({
          userName: email,
          password: password,
        }),
      },
    );
    const resData = await response.json();
    console.log(resData);
    if (resData.Status === 404) {
      console.log(resData.Message);
      Alert.alert(resData.Message);
    } else if (resData.Status === 406) {
      console.log(resData.Message);
      Alert.alert(resData.Message);
    } else if (resData.Status === 400) {
      console.log(resData.ValidationMessage[0]);
      Alert.alert(resData.ValidationMessage[0]);
    }
    dispatch({
      type: LOGIN,
      token: resData.DataToken,
      userId: resData.Data.UserGuid,
    });
    saveToken(resData.Data.Token);
    console.log('test ', resData.Data.Token);
    console.log(await AsyncStorage.getItem('userToken'));
  };
};

export const ChangePassword = (emailId, oldPassword, newPassword) => {
  return async dispatch => {
    const Usertoken = await AsyncStorage.getItem('userToken');
    //const token = JSON.parse(Usertoken);
    console.log('pa u ber lidhja', token);
    console.log('fdd', token.token);

    const response = await fetch(
      'https://freeindemo.euronet.aero/api/client/ChangePassword',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apiSecretKey: 'x114a109114w119q99v104',
          Authorization: 'Bearer ' + Usertoken,
        },
        body: JSON.stringify({
          emailId: token.email,
          oldPassword: oldPassword,
          newPassword: newPassword,
        }),
      },
    );

    const resData = await response.json();

    if (resData.Status === 200) {
      Alert.alert('Your password has been changed successfully!');
    } else {
      Alert.alert(
        'Warning ⚠️',
        'Your old password is wrong or a field has been empty!',
        [{text: '😞 OK'}],
      );
    }
  };
};

export const ListStops = () => {
  return async dispatch => {
    const response = await fetch(
      'https://freeindemo.euronet.aero/api/client/ListStop',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ApiSecretKey: 'x114a109114w119q99v104',
        },
      },
    ).then(response => response.json());
  };
};

const saveToken = token => {
  AsyncStorage.setItem(
    'userToken',
    token,
    // JSON.stringify({
    //   token: token,
    // //  email: email,
    // }),
  );
};

export const logout = () => {
  return async dispatch => {
    const response = await fetch(
      'https://freeindemo.euronet.aero/api/client/logout',
    );
    AsyncStorage.removeItem('userToken');
    console.log('LOGOUT', await AsyncStorage.getItem('userToken'));
    dispatch({type: LOGOUT});
  };
};
