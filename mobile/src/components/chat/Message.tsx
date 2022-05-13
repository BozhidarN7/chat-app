import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';
import Clipboard from '@react-native-clipboard/clipboard';
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
    const [isOpenMessageOptionMenu, setIsOpenMessageOptionMenu] =
        useState(false);
    const { currentUser } = useAuth();

    const isLocalUser = currentUser.fullName.trim() === senderFullName.trim();

    const openMessageOptionsMenuHandler = () => {
        if (senderId !== currentUser.id) return;
        setIsOpenMessageOptionMenu(true);
    };

    const closeMessageOptionMenuHandler = () => {
        setIsOpenMessageOptionMenu(false);
    };

    const copyTextHandler = () => {
        Clipboard.setString(message);
        setIsOpenMessageOptionMenu(false);
    };

    return type === 'text' ? (
        <View
            style={tw.style(`flex-1 flex-row my-2`, isLocalUser && 'self-end')}
        >
            <View style={tw`self-start mr-2`}>
                <Avatar size={7} />
            </View>
            <View style={tw`max-w-50`}>
                <Text>{senderFullName}</Text>
                <Pressable
                    onLongPress={openMessageOptionsMenuHandler}
                    delayLongPress={1000}
                >
                    <Menu
                        visible={isOpenMessageOptionMenu}
                        anchor={
                            <View
                                style={tw.style(
                                    `p-2 rounded-xl mt-1`,
                                    isLocalUser ? 'bg-blue-500' : 'bg-pink-500'
                                )}
                            >
                                <Text style={tw`text-white`}>{message}</Text>
                            </View>
                        }
                        onRequestClose={closeMessageOptionMenuHandler}
                    >
                        <MenuItem onPress={copyTextHandler}>Copy</MenuItem>
                        <MenuItem>Edit</MenuItem>
                        <MenuItem>Delete</MenuItem>
                    </Menu>
                </Pressable>
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
