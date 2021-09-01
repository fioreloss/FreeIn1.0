import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import MyHallScreen from '../screens/MyHall/MyHall';
import MyRoomScreen from '../screens/MyRoom/MyRoom';
import ChangePassword from '../screens/auth/ChangePassword';
import EditorScreen from '../screens/navScreens/editor/Editor';
import SearchScreen from '../screens/navScreens/search/Search';
import FiltriScreen from '../screens/navScreens/filtri/Filtri';
import SalvatiScreen2 from '../screens/navScreens/filtri/Salvati';
import MyPostScreen2 from '../screens/navScreens/filtri/MyPost';
import AmiciScreen2 from '../screens/navScreens/filtri/Amici';
import GradientHeader from '../constants/GradientHeader';

const MyHallStack = createStackNavigator();
const MyRoomStack = createStackNavigator();
const EditorStack = createStackNavigator();
const SearchStack = createStackNavigator();
const FiltriStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => (
  <Tab.Navigator initialRouteName="home" component={MyHallStackScreen}>
    <Tab.Screen
      name="MyHallScreen"
      component={MyHallStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#ff4000',
        tabBarIcon: ({color}) => (
          <IconOcticons name="home" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="Editor"
      component={EditorStackScreen}
      options={{
        tabBarLabel: 'Editor',
        tabBarColor: '#ff4000',
        tabBarIcon: ({color}) => (
          <IconSimpleLineIcons name="plus" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#ff4000',
        tabBarIcon: ({color}) => (
          <IconIonicons name="search-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Filtri"
      component={FiltriStackScreen}
      options={{
        tabBarLabel: 'Filtri',
        tabBarColor: '#ff4000',
        tabBarIcon: ({color}) => (
          <IconAntDesign name="filter" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="MyRoomScreen"
      component={MyRoomStackScreen}
      options={{
        tabBarLabel: 'My Room',
        tabBarColor: '#ff4000',
        tabBarIcon: ({color}) => (
          <IconFontisto name="person" color={color} size={23} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNav;

const MyHallStackScreen = ({navigation}) => (
  <MyHallStack.Navigator
    screenOptions={{
      headerBackground: () => <GradientHeader />,
      headerStatusBarHeight: 28,
      headerTintColor: 'red',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
    }}>
    <MyHallStack.Screen
      name="MyHall"
      component={MyHallScreen}
      options={{
        headerTitleAlign: 'center',
        title: 'My Hall',
        headerLeft: () => (
          <IconIonicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}></IconIonicons.Button>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 25,
                marginRight: 10,
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
        ),
      }}
    />
  </MyHallStack.Navigator>
);
const EditorStackScreen = ({navigation}) => (
  <EditorStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerBackground: () => <GradientHeader />,
      headerStatusBarHeight: 28,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleStyle: {color: '#fff'},
    }}>
    <EditorStack.Screen
      name="Editor"
      component={EditorScreen}
      options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <IconIonicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}></IconIonicons.Button>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 25,
                marginRight: 10,
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
        ),
      }}
    />
  </EditorStack.Navigator>
);

const SearchStackScreen = ({navigation}) => (
  <SearchStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerBackground: () => <GradientHeader />,
      headerStatusBarHeight: 28,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <IconIonicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}></IconIonicons.Button>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 25,
                marginRight: 10,
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
        ),
      }}
    />
  </SearchStack.Navigator>
);
const FiltriStackScreen = ({navigation}) => (
  <FiltriStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerBackground: () => <GradientHeader />,
      headerStatusBarHeight: 28,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <FiltriStack.Screen
      name="Filtri"
      component={FiltriScreen}
      options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <IconIonicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}></IconIonicons.Button>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 25,
                marginRight: 10,
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
        ),
      }}
    />
    <FiltriStack.Screen
      name="Salvati"
      component={SalvatiScreen2}
      options={{
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 25,
                marginRight: 10,
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
        ),
      }}
    />
    <FiltriStack.Screen
      name="MyPost"
      component={MyPostScreen2}
      options={{
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 25,
                marginRight: 10,
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
        ),
      }}
    />
    <FiltriStack.Screen
      name="Amici"
      component={AmiciScreen2}
      options={{
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 25,
                marginRight: 10,
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
        ),
      }}
    />
  </FiltriStack.Navigator>
);
const MyRoomStackScreen = ({navigation}) => (
  <MyRoomStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerBackground: () => <GradientHeader />,
      headerStatusBarHeight: 28,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <MyRoomStack.Screen
      name="My Room" //screen name
      component={MyRoomScreen} //nav screen
      options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <IconIonicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}></IconIonicons.Button>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 25,
                marginRight: 10,
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
        ),
      }}
    />
    <MyRoomStack.Screen
      name="ChangePassword" //screen name
      component={ChangePassword} //nav screen
      options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <IconIonicons.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}></IconIonicons.Button>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyHallScreen')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 25,
                marginRight: 10,
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
        ),
      }}
    />
  </MyRoomStack.Navigator>
);
