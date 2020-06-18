import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>child1</Text>
            <Text style={styles.textStyle}>child2</Text>
            <Text style={styles.textStyle}>child3</Text>
        </View>
    )
};

const styles =StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'red',
        margin: 20
    }
})

export default BoxScreen;