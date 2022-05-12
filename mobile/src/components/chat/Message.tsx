import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

import Avatar from '../common/Avatar';
import { useAuth } from '../../contexts/AuthCtx';

type Props = {
    message: string;
    messageId: string;
    senderId: string;
    senderFullName: string;
    dateAndTime: string;
    type: string;
};

const Message = ({
    message,
    messageId,
    senderId,
    senderFullName,
    dateAndTime,
    type,
}: Props) => {
    const { currentUser } = useAuth();

    const isLocalUser = currentUser.fullName.trim() === senderFullName.trim();

    return type === 'text' ? (
        <View
            style={tw.style(`flex-1 flex-row my-2`, isLocalUser && 'self-end')}
        >
            <View style={tw`self-start mr-2`}>
                <Avatar size={7} />
            </View>
            <View style={tw`max-w-50`}>
                <Text>{senderFullName}</Text>
                <View
                    style={tw.style(
                        `p-2 rounded-xl mt-1`,
                        isLocalUser ? 'bg-blue-500' : 'bg-pink-500'
                    )}
                >
                    <Text style={tw`text-white`}>{message}</Text>
                </View>
            </View>
        </View>
    ) : (
        <View
            style={tw.style(
                `flex-1 flex-row my-2 w-4/5`,
                isLocalUser && 'self-end'
            )}
        >
            <View style={tw`self-start mr-2`}>
                <Avatar size={7} />
            </View>
            <View style={tw`w-full`}>
                <Text>{senderFullName}</Text>
                <View>
                    <Image
                        style={tw`h-45 mt-1`}
                        source={{
                            uri: `data:image/jpeg;base64,${message}`,
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Message;
