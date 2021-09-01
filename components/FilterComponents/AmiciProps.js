import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const AmiciProps = props => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: props.color,
            height: 60,
            width: 60,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconFontisto name="person" color="white" size={36} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginLeft: 20,
            flexDirection: 'column',
          }}>
          <Text style={styles.text}>{props.fullname}</Text>
          <Text style={styles.textUsername}>{props.username}</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#fa5c00',
          borderBottomWidth: 1,
          marginStart: 20,
        }}></View>
    </>
  );
};

export default AmiciProps;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fa5c00',
  },
  textUsername: {
    color: '#fa5c00',
  },
});
