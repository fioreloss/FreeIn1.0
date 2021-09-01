import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';

import SignUpScreen from '../screens/auth/register/SignUpScreen';
import Register from '../screens/auth/register/Register';
import UserInfo from '../screens/auth/register/UserInfo';
import YourProfile from '../screens/auth/register/YourProfile';
import DescInfo from '../screens/auth/register/DescInfo';
import Login from '../screens/auth/login/login';
import AppContainer from '../AppContainer';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="Register" component={Register} />
    <RootStack.Screen name="UserInfo" component={UserInfo} />
    <RootStack.Screen name="YourProfile" component={YourProfile} />
    <RootStack.Screen name="DescInfo" component={DescInfo} />
    <RootStack.Screen name="AppContainer" component={AppContainer} />
  </RootStack.Navigator>
);

export default RootStackScreen;
