import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import NotificationsList from '../components/chat/NotificationsList';
import { useAppDispatch } from '../app/hooks';
import { isTabScreenChanged } from '../features/chatsSlice';

const NotificationsScreen = ({ navigation }: any) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(isTabScreenChanged(true));
    }, []);

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
