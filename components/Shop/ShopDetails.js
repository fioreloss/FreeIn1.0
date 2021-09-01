import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import ShopText from './ShopText';
import jars from '../../Assets/jars.jpg';
import LineCruasel from '../Card/LineCruasel';

const ShopDetails = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={jars} />
        <ShopText
          title="Pomodori sott'olio"
          price="10.00"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        />
      </View>
      <LineCruasel />
    </ScrollView>
  );
};

export default ShopDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    flexDirection: 'row',
    paddingBottom: '20%',
  },
  image: {
    borderRadius: 25,
    marginLeft: 10,
    width: 185,
    height: 280,
  },
});
