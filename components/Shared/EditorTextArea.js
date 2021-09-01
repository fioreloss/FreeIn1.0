import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const EditorTextArea = props => {
  return (
    <View>
      <Text style={styles.text}>
        {props.name} <Text style={styles.text2}>{props.required}</Text>
      </Text>

      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        onChangeText={props.onChangeText}
        value={props.Value}
        style={styles.textinput}
      />
    </View>
  );
};

export default EditorTextArea;

const styles = StyleSheet.create({
  textinput: {
    margin: 5,
    height: 90,
    paddingLeft: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 6,
    marginBottom: 20,
    paddingHorizontal: 9,
    borderColor: 'grey',
    borderRadius: 5,
    color: 'rgba(45,46,130,1)',
    fontSize: 12,
    textAlignVertical: 'top',
  },
  text: {
    paddingHorizontal: 20,
    alignItems: 'center',
    color: 'black',
    marginTop: 15,
    fontSize: 12,
  },

  text2: {
    paddingHorizontal: 20,
    alignItems: 'center',
    color: 'grey',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
