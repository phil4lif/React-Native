import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
  <View>
    <Text style={styles.text}>Select a Demo </Text>
    <Button 
    onPress={() => navigation.navigate('Components')}
    title="Go to components demo"
    />
    <Button
    title="Go to list demo"
    onPress={() => navigation.navigate('List')}
    />
    <Button
    title="Go to image demo"
    onPress={() => navigation.navigate('Image')}
    />
    <Button
    title="Go to counter demo"
    onPress={() => navigation.navigate('Counter')}
    />
    <Button
    title="Go to color demo"
    onPress={() => navigation.navigate('Color')}
    />
    <Button
    title="Go to square demo"
    onPress={() => navigation.navigate('Square')}
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


