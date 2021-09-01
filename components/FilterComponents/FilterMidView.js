import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Sliders from './Sliders';

const FilterMidView = () => {
  return (
    <View style={styles.SecondView}>
      <View style={styles.second1}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            fontStyle: 'italic',
          }}>
          Filter attitude
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          height: 10,
          width: 260,
        }}></View>
      <View style={{marginTop: 20}}>
        {/* <SliderFilter textName="relax" /> */}
        <Sliders startValue={50} textValue={'Arte e cultura'} />
        <Sliders startValue={20} textValue={'Relax'} />
        <Sliders startValue={70} textValue={'Mare'} />
        <Sliders startValue={50} textValue={'Natura e avventura'} />
        <Sliders startValue={60} textValue={'Gourmet explorer'} />
        <Sliders startValue={40} textValue={'Party'} />
      </View>
    </View>
  );
};

export default FilterMidView;

const styles = StyleSheet.create({
  SecondView: {flexDirection: 'column', marginTop: 20},
  // second1: {backgroundColor: 'black', height: 2, width: 'full'},
  text: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
