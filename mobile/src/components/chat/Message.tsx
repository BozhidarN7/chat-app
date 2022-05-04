import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import Avatar from '../common/Avatar';

type Props = {};

const Message = ({}) => {
    return (
        <View style={tw`flex-1 flex-row my-2`}>
            <View style={tw`self-start mr-2`}>
                <Avatar size={7} />
            </View>
            <View>
                <Text>Boris Stamatov</Text>
                <View style={tw`bg-pink-500 max-w-50 p-2 rounded-xl`}>
                    <Text style={tw`text-white`}>
                        Hello worldfasdfasdfasdfasdfasdfasdfasfsdffsdfas
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Message;
