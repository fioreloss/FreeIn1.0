import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TappeItenerariText = props => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.textTitle}>{props.title}</Text>
      <Text style={styles.textDesc}>{props.description}</Text>
    </View>
  );
};

export default TappeItenerariText;

const styles = StyleSheet.create({
  containerText: {
    flex: 2,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '700',
    padding: 10,
  },
  textDesc: {
    fontSize: 14,
    padding: 10,
    justifyContent: 'space-around',
  },
});
