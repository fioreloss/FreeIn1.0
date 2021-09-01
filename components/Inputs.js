import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

export default Inputs = props => {
  return (
    <View style={styles.inputContainer}>
      <Feather
        name={props.name}
        size={20}
        style={styles.inputIcon}
        // color={'rgba(45,46,130,1)'}
        color={props.color}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        onChangeText={props.onChangeText}
       // onChangeTextPass={val => props.textInputChange(val)}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
  },
  input: {
    width: 250,
    height: 43,
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 45,
    color: 'rgba(45,46,130,1)',
    fontWeight: '700',
    marginHorizontal: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 40,
  },
  btnEye: {
    position: 'absolute',
    top: 10,
    right: 40,
  },
});

// import { StyleSheet } from 'react-native'

// export const Inputs  = StyleSheet.create({
//     inputContainer: {
//         marginTop: 25
//     },
//     input: {
//         width: 250,
//         height: 43,
//         borderRadius: 25,
//         borderColor: '#fff',
//         borderWidth: 1,
//         fontSize: 16,
//         paddingLeft: 45,
//         color: '#B66961',
//         fontWeight: '700',
//         marginHorizontal: 20
//     },
//     inputIcon: {
//         position: 'absolute',
//         top: 10,
//         left: 40,
//     },
//     btnEye: {
//         position: 'absolute',
//         top: 10,
//         right: 40,
//       },
// })
