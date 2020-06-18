import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    return (
        <View>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="name"/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 25,
        borderColor: 'black',
        borderWidth: 1

    }
})

export default TextScreen;