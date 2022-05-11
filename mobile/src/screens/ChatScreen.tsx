import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import {
    DrawerLayoutAndroid,
    Dimensions,
    View,
    Text,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationScreenProp } from 'react-navigation';
import tw from 'twrnc';

import UserAvatarMenu from 'src/components/menus/UserAvatarMenu';
import SearchField from '../components/common/SearchField';
import ChatsList from 'src/components/chat/ChatsList';
import Message from '../components/chat/Message';
import { useChat } from '../contexts/ChatCtx';
import { useAppSelector } from '../app/hooks';
import { FileMessage, TextMessage } from '../interfaces/chatInterfaces';
import {
    isChatDrawerOpenChanged,
    isTabScreenChanged,
} from '../features/chatsSlice';
import { useAppDispatch } from '../app/hooks';

type Props = {
    navigation: NavigationScreenProp<any, any>;
};

const ChatScreen = ({ navigation }: Props) => {
    const dispatch = useAppDispatch();

    const drawer = useRef(null);
    const [roomId, setRoomId] = useState<string>();
    const [chatSearchQuery, setChatSearchQuery] = useState('');

    const { openChatRoom, loadingChat } = useChat();
    const isChatDrawerOpen = useAppSelector(
        (state) => state.chats.isChatDrawerOpen
    );

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

    const setChatSearchQueryHandler = (query: string) => {
        setChatSearchQuery(query);
    };

    useEffect(() => {
        dispatch(isTabScreenChanged(false));
        if (!drawer.current) return;

        if (isChatDrawerOpen) {
            drawer.current.openDrawer();
        } else {
            if (!loadingChat) {
                drawer.current.closeDrawer();
            }
        }
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarStyle: { display: 'none' },
            headerRight: () => <UserAvatarMenu />,
            headerTitle: () => (
                <SearchField
                    placeholder="Search a recent chat..."
                    searchValue={chatSearchQuery}
                    setSearchValueHandler={setChatSearchQueryHandler}
                />
            ),
            headerLeft: () => (
                <Ionicons
                    onPress={() => {
                        dispatch(isChatDrawerOpenChanged(!isChatDrawerOpen));
                    }}
                    name="menu-outline"
                    size={36}
                    color="black"
                    style={tw`-ml-2`}
                />
            ),
        });
    }, [navigation, chatSearchQuery]);

    const chatsView = () => (
        <ChatsList
            openChatSpaceHandler={openChatSpaceHandler}
            chatSearchQuery={chatSearchQuery}
        />
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={Dimensions.get('window').width}
            drawerPosition="left"
            renderNavigationView={chatsView}
            onDrawerOpen={() => dispatch(isChatDrawerOpenChanged(true))}
            onDrawerClose={() => dispatch(isChatDrawerOpenChanged(false))}
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
