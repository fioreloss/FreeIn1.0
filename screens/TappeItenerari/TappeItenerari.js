import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

import CardList from '../../components/Card/CardList';

//Assets
import map from '../../Assets/map.jpg';
import TappeItenerariImages from '../../components/TappeItenerariComponents/TappeItenerariImages';
import TappeItenerariText from '../../components/TappeItenerariComponents/TappeItenerariText';
import LineCruasel from '../../components/Card/LineCruasel';

export default function TappeItenerari() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <TappeItenerariImages
          imagesSource={{
            uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896591/FreeIn/bgPost_e4ie7s.png',
          }}
        />
        <TappeItenerariImages
          imagesSource={{
            uri: 'https://res.cloudinary.com/dhuewpu8x/image/upload/v1629896582/FreeIn/map_g4ew2m.jpg',
          }}
        />
      </View>
      <TappeItenerariText
        title="Titull with props"
        description="Description with props
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      />

      <View styles={styles.carousel}>
        <LineCruasel />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
  },
});
