import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import CardList from '../../../components/Card/CardList';

const Salvati = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CardList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Salvati;
