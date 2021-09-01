import {grey} from 'chalk';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardList from './CardList';

const LineCruasel = () => {
  return (
    <View>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 2,
          marginStart: 20,
          marginEnd: 20,
        }}></View>
      <Text style={styles.text}>Ti potrebbe anche interessare</Text>
      <CardList />
    </View>
  );
};

export default LineCruasel;

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: '#505050',
    fontWeight: 'bold',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
