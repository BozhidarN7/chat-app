import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { DrawerLayoutAndroid, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { NavigationScreenProp } from 'react-navigation';

import UserAvatarMenu from 'src/components/menus/UserAvatarMenu';
import ChatsList from 'src/components/chat/ChatsList';
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
        ></DrawerLayoutAndroid>
    );
};

export default ChatScreen;
