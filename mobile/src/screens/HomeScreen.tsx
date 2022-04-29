import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const HomeScreen = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        (async () => {
            const t = await SecureStore.getItemAsync('token');
            setToken(t!);
        })();
    });

    return (
        <View>
            <Text>{token}</Text>
        </View>
    );
};

export default HomeScreen;
