import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

import ChatScreen from './ChatScreen';
import UsersScreen from './UsersScreen';
import { useAuth } from '../contexts/AuthCtx';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    const { currentUser } = useAuth();
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
                name="Chat"
                component={ChatScreen}
                options={{
                    title: `Chats`,
                    headerTitleAlign: 'center',
                    headerTitleStyle: tw`text-base`,
                }}
            />
            <Tab.Screen name="Users" component={UsersScreen} />
        </Tab.Navigator>
    );
};

export default HomeScreen;
