/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomNav from './nav/BottomNav';

import {DrawerContent} from './nav/DrawerContent';
import MyHall from './screens/MyHall/MyHall';

import TappeItenerari from './screens/TappeItenerari/TappeItenerari';
import UserInfo from './screens/auth/register/UserInfo';

import testScreen from './screens/TestScreen';

import ChangePassword from './screens/auth/ChangePassword';
import ShopDetails from './components/Shop/ShopDetails';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenStackHeaderLeftView} from 'react-native-screens';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function headerLeft() {
  const navigation = useNavigation();
  return (
    <IconIonicons.Button
      name="ios-menu"
      size={25}
      backgroundColor="transparent"
      onPress={() => navigation.openDrawer()}
    />
  );
}

function headerRight() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 3,
          // marginBottom:30,
          borderRadius: 25,
          // marginRight: 10,
        }}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896664/FreeIn/logo-2048_oykatl.png',
          }}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const GradientHeader = () => (
  <View>
    <Header
      height={80}
      leftComponent={headerLeft}
      rightComponent={headerRight}
      centerComponent={{
        text: 'FreeIn',
        style: {color: 'white', fontWeight: 'bold', fontSize: 24},
      }}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#020024', '#090979', '#ff8400'],
        start: {x: 0, y: 0},
        end: {x: 1, y: 1.0},
        locations: [0, 0.1, 0.9],
      }}
    />
    <StatusBar translucent={true} backgroundColor={'transparent'} />
  </View>
);

const AppContainer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="MyHallDrawer" component={BottomNav} />
      <Drawer.Screen
        name="MyHall"
        component={MyHall}
        BottomNav={MyHall}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ff4000',
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: true,
          header: () => <GradientHeader />,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="TestScreen"
        component={testScreen}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          header: () => <GradientHeader />,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerStyle: {
            backgroundColor: '#ff4000',
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="TappeItenerari"
        component={TappeItenerari}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          header: () => <GradientHeader />,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="ShopCard"
        component={ShopDetails}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          header: () => <GradientHeader />,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          header: () => <GradientHeader />,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: '#fff',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppContainer;

// inside NAv Container
