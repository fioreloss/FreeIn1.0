import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import AmiciProps from '../../../components/FilterComponents/AmiciProps';
import FilterBottomNav from '../../../components/FilterComponents/FilterBottomNav';

const Amici = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <AmiciProps
          fullname="JOHN SMITH"
          color="#fa5c00"
          username="@johnsmith"
        />
        <AmiciProps
          fullname="JANE SMITH"
          color="#fa5c00"
          username="@janesmith"
        />
        <AmiciProps
          fullname="JACK SMITH"
          color="#fa5c00"
          username="@jacksmith"
        />
        <AmiciProps
          fullname="POULO DYBALA"
          color="#fa5c00"
          username="@dybala"
        />
        <AmiciProps
          fullname="FEDERICO CHIESA"
          color="#02b2e8"
          username="@chiesa"
        />
        <AmiciProps
          fullname="LEONARDO BONUCCI"
          color="#02b2e8"
          username="@bonuci"
        />
        <AmiciProps
          fullname="FEDERICO CHIESA"
          color="#02b2e8"
          username="@chiesa"
        />
        <AmiciProps
          fullname="LEONARDO BONUCCI"
          color="#02b2e8"
          username="@bonuci"
        />
        <AmiciProps
          fullname="FEDERICO CHIESA"
          color="#02b2e8"
          username="@chiesa"
        />
      </ScrollView>
      <FilterBottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingLeft: 10,
    flexDirection: 'column',
  },
});

export default Amici;
