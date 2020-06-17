import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Hi there </Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center'
  }
});

export default HomeScreen;


