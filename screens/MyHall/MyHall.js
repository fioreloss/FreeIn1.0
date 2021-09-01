import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Members from '../../components/Shared/Members';
import CardList from '../../components/Card/CardList';

const MyHall = () => {
  return (
    <SafeAreaView style={{paddingTop: 0}}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Members
            style={{
              justifyContent: 'center',
              height: 100,
              backgroundColor: 'whitesmoke',
              // paddingTop: '4%',
            }}
          />

          <CardList style={styles.container} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '3%',
    paddingTop: '3%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyHall;
