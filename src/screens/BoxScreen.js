import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>child1</Text>
            <Text style={styles.textTwoStyle}>child2</Text>
            <Text style={styles.textThreeStyle}>child3</Text>
        </View>
    )
};

const styles =StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: 'black'
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 4
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 4
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
    }
})


export default BoxScreen;