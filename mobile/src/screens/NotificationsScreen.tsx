import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import NotificationsList from '../components/chat/NotificationsList';

const NotificationsScreen = ({ navigation }: any) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleStyle: tw`text-red-500`,
        });
    }, [navigation]);
    return (
        <View>
            <Text style={tw`text-xl pl-4 py-2`}>Friendship requests</Text>
            <NotificationsList />
        </View>
    );
};

export default NotificationsScreen;
