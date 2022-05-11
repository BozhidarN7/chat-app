import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

import { useChat } from '../../contexts/ChatCtx';

type Props = {
    roomId: string;
};

const MessageInput = ({ roomId }: Props) => {
    const [message, setMessage] = useState('');

    const { sendMessage } = useChat();

    const sendMessageHandler = () => {
        if (message.trim() === '') {
            return;
        }

        sendMessage(roomId, message);
        setMessage('');
    };
    return (
        <View>
            <View style={tw`relative border-t`}>
                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    style={tw`w-5/6 p-2`}
                    placeholder="Type a message..."
                    multiline={true}
                />
                <Ionicons
                    onPress={sendMessageHandler}
                    name="send"
                    size={22}
                    style={[tw`absolute text-blue-500 right-2 top-3`]}
                />
            </View>
        </View>
    );
};

export default MessageInput;
