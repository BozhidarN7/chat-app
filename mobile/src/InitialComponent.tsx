import React, { useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

import { useAppDispatch } from './app/hooks';
import { useAuth } from './contexts/AuthCtx';
import { useChat } from './contexts/ChatCtx';
import { getUserProfileImage } from './services/userService';
import { fetchChats } from './features/chatsSlice';
import {
    profileImageChanged,
    fetchNewFriendRequests,
} from './features/usersSlice';
import AppNavigation from './navigations/AppNavigation';
import { baseUrl } from './api/apiRoutes';
import * as SecureStroe from 'expo-secure-store';

const InitialComponent = () => {
    const dispatch = useAppDispatch();
    const { currentUser, token } = useAuth();
    const { saveConnection } = useChat();

    // useEffect(() => {
    //     (async () => {
    //         if (token) {
    //             const connection = new HubConnectionBuilder()
    //                 .withUrl(`${baseUrl}/chat`, {
    //                     accessTokenFactory: () => token,
    //                 })
    //                 .withAutomaticReconnect()
    //                 .configureLogging(LogLevel.Information)
    //                 .build();

    //             await connection.start();
    //             saveConnection(connection);
    //         }
    //     })();
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         if (currentUser) {
    //             const res = await getUserProfileImage(currentUser.id);
    //             const data = res.data;

    //             dispatch(fetchNewFriendRequests(currentUser.id));
    //             dispatch(fetchChats(currentUser.id));

    //             if (data.success) {
    //                 dispatch(profileImageChanged(data.data.profileImage));
    //             }
    //         }
    //     })();
    // }, []);

    return <AppNavigation />;
};

export default InitialComponent;
