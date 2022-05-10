import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

import ChatsNavigation from '../navigations/ChatsNavigation';
import UsersNavigation from '../navigations/UsersNavigation';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Chat"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Chat') {
                        return (
                            <Ionicons
                                name="chatbox-outline"
                                size={size}
                                color={color}
                            />
                        );
                    }
                    return (
                        <Ionicons
                            name="people-outline"
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="ChatsNav"
                component={ChatsNavigation}
                options={{
                    headerShown: false,
                    title: `Chats`,
                    // headerTitleAlign: 'center',
                    // headerTitleStyle: tw`text-base`,
                    // headerLeftContainerStyle: tw`pl-2`,
                    // headerRightContainerStyle: tw`pr-2`,
                }}
            />
            <Tab.Screen
                name="UsersNav"
                component={UsersNavigation}
                options={{
                    headerShown: false,
                    title: 'Users',
                    // headerTitleStyle: tw`text-base`,
                    // headerRightContainerStyle: tw`pr-2`,
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeScreen;
