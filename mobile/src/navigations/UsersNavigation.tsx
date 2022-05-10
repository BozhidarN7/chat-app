import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';

import UsersScreen from '../screens/UsersScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Stack = createNativeStackNavigator();

const UsersNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Users"
                component={UsersScreen}
                options={{
                    title: `Users`,
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

export default UsersNavigation;
