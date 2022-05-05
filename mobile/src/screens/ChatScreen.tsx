import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import {
    DrawerLayoutAndroid,
    Dimensions,
    View,
    Text,
    ScrollView,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { NavigationScreenProp } from 'react-navigation';
import tw from 'twrnc';

import UserAvatarMenu from 'src/components/menus/UserAvatarMenu';
import Avatar from '../components/common/Avatar';
import ChatsList from 'src/components/chat/ChatsList';
import Message from '../components/chat/Message';
import { useChat } from '../contexts/ChatCtx';
import { useAppSelector } from '../app/hooks';
import { FileMessage, TextMessage } from '../interfaces/chatInterfaces';

type Props = {
    navigation: NavigationScreenProp<any, any>;
};

const ChatScreen = ({ navigation }: Props) => {
    const drawer = useRef(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [roomId, setRoomId] = useState<string>();

    const { openChatRoom, loadingChat } = useChat();
    const messages = useAppSelector((state) =>
        state.chats.chats.find((chat) => chat.roomId === roomId)
    )?.messages;

    const openChatSpaceHandler = async (roomId: string) => {
        setRoomId(roomId);

        await openChatRoom(roomId);
        if (drawer.current) {
            drawer.current.closeDrawer();
        }
    };

    useEffect(() => {
        if (!drawer.current) return;

        if (isDrawerOpen) {
            drawer.current.openDrawer();
        } else {
            if (!loadingChat) {
                drawer.current.closeDrawer();
            }
        }
    }, [isDrawerOpen]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <UserAvatarMenu />,
            headerLeft: () => (
                <Entypo
                    onPress={() => setIsDrawerOpen((prev) => !prev)}
                    name="menu"
                    size={36}
                    color="black"
                />
            ),
        });
    }, [navigation]);

    const chatsView = () => (
        <ChatsList openChatSpaceHandler={openChatSpaceHandler} />
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={Dimensions.get('window').width}
            drawerPosition="left"
            renderNavigationView={chatsView}
        >
            <ScrollView style={tw`flex-1 mx-1 my-2`}>
                {!roomId ? (
                    <Text style={tw`text-base`}>Open a chat from the menu</Text>
                ) : null}
                {messages?.map((message) => {
                    const type = message.messageType;

                    if (type === 'file') {
                        message = message as FileMessage;
                        return (
                            <Message
                                senderFullName={message.senderFullName}
                                message={message.file}
                                messageId={message.id}
                                senderId={message.senderId}
                                dateAndTime={message.messageDateAndTime}
                                type={type}
                                key={message.id}
                            />
                        );
                    } else {
                        message = message as TextMessage;

                        return (
                            <Message
                                senderFullName={message.senderFullName}
                                message={message.message}
                                messageId={message.id}
                                senderId={message.senderId}
                                dateAndTime={message.messageDateAndTime}
                                type={type}
                                key={message.id}
                            />
                        );
                    }
                })}
            </ScrollView>
        </DrawerLayoutAndroid>
    );
};

export default ChatScreen;
