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

type Props = {
    navigation: NavigationScreenProp<any, any>;
};

const ChatScreen = ({ navigation }: Props) => {
    const drawer = useRef(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [roomId, setRoomId] = useState<string>();

    const { openChatRoom } = useChat();
    const messages = useAppSelector((state) =>
        state.chats.chats.find((chat) => chat.roomId === roomId)
    )?.messages;

    const openChatSpaceHandler = async (roomId: string) => {
        if (drawer.current) {
            drawer.current.closeDrawer();
        }

        setRoomId(roomId);
        await openChatRoom(roomId);
    };

    useEffect(() => {
        if (!drawer.current) return;

        if (isDrawerOpen) {
            drawer.current.openDrawer();
        } else {
            drawer.current.closeDrawer();
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
                <Message />
                <Message />
            </ScrollView>
        </DrawerLayoutAndroid>
    );
};

export default ChatScreen;
