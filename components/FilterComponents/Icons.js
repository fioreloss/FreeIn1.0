import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Icons = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Ionicons
        style={styles.ikona}
        name={props.iconName}
        size={40}
        color="white"
        onPress={() => navigation.navigate(props.navigimi)}
      />
      <Text style={styles.text}>{props.nameScreen}</Text>
    </View>
  );
};
export default Icons;
const styles = StyleSheet.create({
  ikona: {padding: 15, backgroundColor: '#ff4000'},
  text: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
