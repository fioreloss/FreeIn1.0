import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import FilterTopView from '../../../components/FilterComponents/FilterTopView';
import FilterMidView from '../../../components/FilterComponents/FilterMidView';
import FilterBottomView from '../../../components/FilterComponents/FilterBottomView';
const Filtri = () => {
  return (
    <View style={styles.container}>
      <FilterTopView />
      <FilterMidView />
      <FilterBottomView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
  },
});

export default Filtri;
