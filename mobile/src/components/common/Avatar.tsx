import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

const Avatar = () => {
    return (
        <View style={tw`w-11 h-11 rounded-full`}>
            <Image
                style={tw`w-11 h-11 rounded-full`}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    );
};

export default Avatar;
