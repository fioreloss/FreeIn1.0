import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import HeaderDrawer from '../components/DrawerComponents/HeaderDrawer';
import * as AuthActions from '../store/actions/auth';
import {useDispatch} from 'react-redux';

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const dispatch = useDispatch();

  return (
    <LinearGradient
      colors={['#f3d7b8', '#ad5f56', '#d08972', '#c57862', '#dfa37d']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0.4, 1, 0, 0.98, 0.78]}
      style={styles.container1}>
      <View style={{flex: 1, paddingTop: 20}}>
        <HeaderDrawer />
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="home-outline"
                    color={'darkmagenta'}
                    size={size}
                  />
                )}
                label="My hall"
                labelStyle={{
                  color: 'darkmagenta',
                  fontWeight: 'bold',
                }}
                onPress={() => {
                  props.navigation.navigate('MyHallScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons
                    name={'cart-outline'}
                    color={'darkmagenta'}
                    size={size}
                  />
                )}
                label="Shop"
                labelStyle={{color: 'darkmagenta', fontWeight: 'bold'}}
                onPress={() => {
                  props.navigation.navigate('ShopCard');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="bookmark-outline"
                    color={'darkmagenta'}
                    size={size}
                  />
                )}
                label="Tappe & Itenerari"
                labelStyle={{color: 'darkmagenta', fontWeight: 'bold'}}
                onPress={() => {
                  props.navigation.navigate('TappeItenerari');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="file-question-outline"
                    color={'darkmagenta'}
                    size={size}
                  />
                )}
                label="TestScreen"
                labelStyle={{color: 'darkmagenta', fontWeight: 'bold'}}
                onPress={() => {
                  props.navigation.navigate('TestScreen');
                }}
              />
            </Drawer.Section>

            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="onepassword"
                  color={'darkmagenta'}
                  size={size}
                />
              )}
              label="ChangePassword"
              labelStyle={{color: 'darkmagenta', fontWeight: 'bold'}}
              onPress={() => {
                props.navigation.navigate('ChangePassword');
              }}
            />

            <Drawer.Section
              title={
                <Text style={{fontWeight: '700', color: 'darkmagenta'}}>
                  Preferences
                </Text>
              }></Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="exit-to-app"
                color={'darkmagenta'}
                size={size}
              />
            )}
            label="Sign Out"
            labelStyle={{color: 'darkmagenta', fontWeight: 'bold'}}
            onPress={() => {
              dispatch(AuthActions.logout());
              props.navigation.navigate('SplashScreen');
            }}
          />
        </Drawer.Section>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingStart: 10,
  },
  drawerContent: {
    flex: 1,
  },

  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
});
