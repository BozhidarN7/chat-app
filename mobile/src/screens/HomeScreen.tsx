import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import * as SecureStore from 'expo-secure-store';

import { useAuth } from 'src/contexts/AuthCtx';

type Props = {
    navigation: NavigationScreenProp<any, any>;
};

const HomeScreen = ({ navigation }: Props) => {
    const [token, setToken] = useState('');

    const { logout } = useAuth(0);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button onPress={logout} title="Logout" />,
        });
    }, [navigation]);
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
