import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
  <View>
    <Text style={styles.text}>Hi there </Text>
    <Button 
    onPress={() => props.navigation.navigate('Components')}
    title="Go to components demo"
    />
    <TouchableOpacity
    onPress={() => console.log('list pressed')}>
      <Text>Go To List Demo</Text>
    </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center'
  }
});

export default HomeScreen;


