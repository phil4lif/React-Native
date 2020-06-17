import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
  <View>
    <Text style={styles.text}>Hi there </Text>
    <Button 
    onPress={() => navigation.navigate('Components')}
    title="Go to components demo"
    />
    <Button
    title="Go to list demo"
    onPress={() => navigation.navigate('List')}
    />
    <Button
    title="Go to image screen"
    onPress={() => navigation.navigate('Image')}
    />
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


