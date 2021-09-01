import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Followers = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingEnd: 10,
        paddingTop: 7,
      }}>
      <View style={styles.view}>
        <Text style={styles.number}>{props.seguiti}</Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={styles.text}>Seguiti</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.number}>{props.follower}</Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={styles.text}>Follower</Text>
      </View>
    </View>
  );
};

export default Followers;

const styles = StyleSheet.create({
  number: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
    fontStyle: 'italic',
  },
  text: {
    color: '#000033',
    fontSize: 14,
    justifyContent: 'center',
    fontStyle: 'italic',
  },
  view: {
    backgroundColor: '#f05c24',
    borderRadius: 25,
    color: 'white',
    fontWeight: 'bold',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
