import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

import { useAppSelector } from '../../app/hooks';

type Props = {
    size: number;
};

const Avatar = ({ size }: Props) => {
    const profileImage = useAppSelector((state) => state.users.profileImage);
    return (
        <View style={tw`w-${size} h-${size} rounded-full`}>
            {profileImage ? (
                <Image
                    style={tw`w-${size} h-${size} rounded-full`}
                    source={{
                        uri: `data:image/jpeg;base64,${profileImage}`,
                    }}
                />
            ) : (
                <Ionicons
                    name="person-circle-outline"
                    size={size * 4}
                    color="black"
                />
            )}
        </View>
    );
};

export default Avatar;
