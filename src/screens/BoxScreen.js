import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>
    )
};

const styles =StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        left: 0
    },
    textTwoStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        alignSelf: 'flex-end'
    },
    textThreeStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',

    }
})


export default BoxScreen;