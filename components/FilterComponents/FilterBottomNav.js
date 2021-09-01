import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FilterBottomNav = navigation => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fa5c00',
        justifyContent: 'center',
        justifyContent: 'space-evenly',

        paddingTop: '4%',
      }}>
      <Fontisto
        style={{width: 50, height: 50}}
        name="plus-a"
        color="white"
        size={30}
      />
      <Fontisto
        style={{width: 50, height: 50}}
        name="zoom"
        color="white"
        size={30}
      />
      <FontAwesome
        style={{width: 50, height: 50}}
        name="mail-forward"
        color="white"
        size={30}
      />
    </View>
  );
};

export default FilterBottomNav;

const styles = StyleSheet.create({});
