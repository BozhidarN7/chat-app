import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const MessageInput = () => {
    return (
        <View>
            <View style={tw`relative border-t`}>
                <TextInput
                    style={tw`w-5/6 p-2`}
                    placeholder="Type a message..."
                    multiline={true}
                />
                <Ionicons
                    name="send"
                    size={22}
                    style={[tw`absolute text-blue-500 right-2 top-3`]}
                />
            </View>
        </View>
    );
};

export default MessageInput;
