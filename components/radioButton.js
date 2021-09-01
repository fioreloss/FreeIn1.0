import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';

function RadioButtons(props) {
  return (
    <RadioButton.Group
      onValueChange={newValue => props.SetValue(newValue)}
      value={props.Value}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.bodyViews}>
          <Text style={styles.text}>Si</Text>
          <RadioButton value="si" />
        </View>
        <View style={styles.bodyViews}>
          <Text style={styles.text}>No</Text>
          <RadioButton value="no" />
        </View>
        <View style={styles.bodyViews}>
          <Text style={styles.text}>Forse</Text>
          <RadioButton value="forse" />
        </View>
      </View>
    </RadioButton.Group>
  );
}

export default RadioButtons;
const styles = StyleSheet.create({
  bodyViews: {padding: 5},
  text: {textAlign: 'center', color: 'white', fontWeight: 'bold'},
});
