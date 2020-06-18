import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')

    return (
        <View>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="name"
            value={name}
            onChangeText={(newValue) => setName(newValue)}/>
            <Text>my name is {name}</Text>
            <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="password"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 6 ? <Text>Password must be at least 6 characters</Text> : <Text>Password is valid</Text>}
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