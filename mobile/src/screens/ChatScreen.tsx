import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import {
    Text,
    View,
    DrawerLayoutAndroid,
    Button,
    Dimensions,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { NavigationScreenProp } from 'react-navigation';
import tw from 'twrnc';

import UserAvatarMenu from 'src/components/menus/UserAvatarMenu';
import ChatsList from 'src/components/chat/ChatsList';

type Props = {
    navigation: NavigationScreenProp<any, any>;
};

const ChatScreen = ({ navigation }: Props) => {
    const drawer = useRef(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

    const chatsView = () => <ChatsList />;

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={Dimensions.get('window').width}
            drawerPosition="left"
            renderNavigationView={chatsView}
        />
    );
};

export default ChatScreen;
