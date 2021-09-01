import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Thirdpartylogin = props => {
  return (
    <TouchableOpacity style={styles.thirdPartyIcons}>
      <Image source={props.image} />
    </TouchableOpacity>
  );
};

export default Thirdpartylogin;

const styles = StyleSheet.create({
  thirdPartyIcons: {
    padding: 5,
    margin: 10,
  },
});
