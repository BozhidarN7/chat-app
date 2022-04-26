import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';
import { View, Button, Text, TextInput } from 'react-native';

type Props = {
    navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
    return (
        <View>
            <Icon size={60} name="lock-outline" />
            <Text>Sign in</Text>
        </View>
    );
};

export default LoginScreen;
