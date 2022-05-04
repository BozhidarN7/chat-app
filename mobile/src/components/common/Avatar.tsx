import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

type Props = {
    size: number;
};

const Avatar = ({ size }: Props) => {
    return (
        <View style={tw`w-${size} h-${size} rounded-full`}>
            <Image
                style={tw`w-${size} h-${size} rounded-full`}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    );
};

export default Avatar;
