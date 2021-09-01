import React from "react";
import {StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={["#2d2e82", "#4546a1"]}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    width: 250,
    height: 45,
    borderRadius: 25,
    borderColor: 'black',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 8
  },
  appButtonText: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default AppButton;