import React, { useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

import { useAppDispatch } from './app/hooks';
import { useAuth } from './contexts/AuthCtx';
import { useChat } from './contexts/ChatCtx';
import { fetchChats } from './features/chatsSlice';
import AppNavigation from './navigations/AppNavigation';
import { baseUrl } from './api/apiRoutes';

const InitialComponent = () => {
    const dispatch = useAppDispatch();
    const { currentUser, token } = useAuth();
    const { saveConnection } = useChat();

    useEffect(() => {
        (async () => {
            if (token) {
                const connection = new HubConnectionBuilder()
                    .withUrl(`${baseUrl}/chat`, {
                        accessTokenFactory: () => token,
                    })
                    .withAutomaticReconnect()
                    .configureLogging(LogLevel.Information)
                    .build();

                await connection.start();
                saveConnection(connection);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (currentUser) {
                dispatch(fetchChats(currentUser.id));
            }
        })();
    }, []);

    return <AppNavigation />;
};

export default InitialComponent;
