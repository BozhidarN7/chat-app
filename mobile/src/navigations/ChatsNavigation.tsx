import React, { useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';

import ChatScreen from '../screens/ChatScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { useAppSelector } from '../app/hooks';

const Stack = createNativeStackNavigator();

const ChatsNavigation = ({ navigation }: any) => {
    const isChatDrawerOpen = useAppSelector(
        (state) => state.chats.isChatDrawerOpen
    );
    const isTabScreen = useAppSelector((state) => state.chats.isTabScreen);

    useLayoutEffect(() => {
        let showTabNavigation = true;

        if (!isChatDrawerOpen && !isTabScreen) {
            showTabNavigation = false;
        }
        navigation.setOptions({
            tabBarStyle: { display: showTabNavigation ? 'flex' : 'none' },
        });
    }, [isChatDrawerOpen, isTabScreen]);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    title: `Chats`,
                    headerTitleAlign: 'center',
                    headerTitleStyle: tw`text-base`,
                }}
            />
            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
        </Stack.Navigator>
    );
};

export default ChatsNavigation;
