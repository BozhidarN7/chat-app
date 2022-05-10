import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';

import ChatScreen from '../screens/ChatScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Stack = createNativeStackNavigator();

const ChatsNavigation = () => {
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
