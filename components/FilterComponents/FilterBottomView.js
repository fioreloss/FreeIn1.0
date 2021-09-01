import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Sliders from './Sliders';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FilterBottomView = () => {
  return (
    <View style={styles.thirdView}>
      <View style={styles.second1}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            fontStyle: 'italic',
          }}>
          Filter business
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          height: 10,
          width: 260,
        }}></View>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcons name="euro" size={20} />
        <Sliders startValue={50} />
      </View>
    </View>
  );
};

export default FilterBottomView;

const styles = StyleSheet.create({
  thirdView: {
    marginTop: 20,
  },
});
