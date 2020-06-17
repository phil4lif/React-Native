import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const yourName = "Phil";
    return (
        <View>
            <Text style={styles.headingStyle}>Getting started with react native!</Text>
            <Text style={styles.textStyle}> My name is {yourName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
