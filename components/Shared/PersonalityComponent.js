import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const PersonalityComponent = props => {
  return (
    <View style={styles.container1}>
      <Image
        source={props.image}
        style={[styles.image1, {backgroundColor: props.color}]}
      />
      <Text
        style={styles.text1}
        onPress={() => navigation.navigate('UserInfo')}>
        {props.percent}%
      </Text>
    </View>
  );
};

export default PersonalityComponent;
const styles = StyleSheet.create({
  container1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image1: {
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 3,
    borderRadius: 60,
    // backgroundColor: '#fa5c00',
  },
  text1: {
    color: '#9c9c9c',
    fontSize: 20,
    fontWeight: '100',
  },
});
