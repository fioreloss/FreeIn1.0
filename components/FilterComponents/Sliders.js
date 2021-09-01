import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from 'react-native-slider3';

const Sliders = props => {
  const [startValue, setStartValue] = useState(props.startValue);

  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.text}>{props.textValue}</Text>
      </View>
      <Slider
        style={styles.slider}
        value={startValue}
        maximumValue={100}
        onValueChange={setStartValue}
        step={10}
        minimumTrackTintColor={'green'}
        thumbTintColor={'green'}
      />
      <View style={styles.viewPercentage}>
        <Text style={styles.percentage}> {startValue}%</Text>
      </View>
    </View>
  );
};

export default Sliders;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  slider: {width: 150},
  text: {
    width: 70,
    textAlign: 'left',

    alignContent: 'center',
  },
  viewText: {justifyContent: 'center', alignItems: 'center'},
  viewPercentage: {justifyContent: 'center', alignItems: 'center', width: 40},
  percentage: {textAlign: 'left'},
});
