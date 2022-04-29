import React from 'react';
import tw from 'twrnc';
import { View, Text, ActivityIndicator } from 'react-native';

type Props = {
    text: string;
};

const Spinner = ({ text }: Props) => {
    return (
        <View style={tw`flex-1 items-center justify-center`}>
            <ActivityIndicator size="large" />
            <Text>Login in</Text>
        </View>
    );
};

export default Spinner;
