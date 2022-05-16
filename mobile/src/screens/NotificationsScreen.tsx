import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import NotificationsList from '../components/chat/NotificationsList';
import { useAppDispatch } from '../app/hooks';
import { isTabScreenChanged } from '../features/chatsSlice';
import { ChatsStackParamList } from '../interfaces/RoutingInterfaces';

type Props = NativeStackScreenProps<ChatsStackParamList>;

const NotificationsScreen = ({ navigation }: Props) => {
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
