import React from 'react';
import tw from 'twrnc';
import { Text, Button } from 'react-native';

type Props = {
    navigation: any;
};

const RegisterScreen = ({ navigation }: Props) => {
    return (
        <Button
            onPress={() => navigation.navigate('Login')}
            title={'Go to loginc'}
        />
    );
};

export default RegisterScreen;
