import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const TappeItenerariImages = props => {
  return (
    <View style={styles.containerTop}>
      <Image source={props.imagesSource} style={styles.image} />
    </View>
  );
};

export default TappeItenerariImages;

const styles = StyleSheet.create({
  containerTop: {
    width: '50%',
    height: 300,
  },
  image: {
    height: 300,
    width: '100%',
  },
});
