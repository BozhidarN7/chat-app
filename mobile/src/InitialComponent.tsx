import React, { useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

import { useAppDispatch } from './app/hooks';
import { useAuth } from './contexts/AuthCtx';
import { useChat } from './contexts/ChatCtx';
import { getUserProfileImage } from './services/userService';
import {
    fetchChats,
    newChatAdded,
    newMessageAdded,
    messageEdited,
    messageDeleted,
} from './features/chatsSlice';
import {
    profileImageChanged,
    fetchNewFriendRequests,
    fetchNewFriendRequest,
} from './features/usersSlice';
import AppNavigation from './navigations/AppNavigation';
import { baseUrl } from './api/apiRoutes';
import * as SecureStore from 'expo-secure-store';

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

                connection?.on('AcceptFriendship', (data) => {
                    if (currentUser?.fullName !== data.senderFullName) {
                        dispatch(
                            newChatAdded({
                                friendFullName: data.senderFullName,
                                friendId: data.senderId,
                                roomId: data.roomId,
                            })
                        );
                    } else {
                        dispatch(
                            newChatAdded({
                                friendFullName: data.receiverFullName,
                                friendId: data.receiverId,
                                roomId: data.roomId,
                            })
                        );
                    }
                });

                connection?.on('ReceiveMessage', (roomId: string, message) => {
                    dispatch(newMessageAdded({ roomId, message }));
                });

                connection?.on('EditMessage', (messageId, roomId, newText) => {
                    dispatch(messageEdited({ messageId, roomId, newText }));
                });

                connection?.on('DeleteMessage', (messageId, roomId) => {
                    dispatch(messageDeleted({ messageId, roomId }));
                });

                connection?.on('ReceiveInvitation', (friendshipId) => {
                    dispatch(fetchNewFriendRequest(friendshipId));
                });

                await connection.start();
                saveConnection(connection);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (currentUser) {
                const res = await getUserProfileImage(currentUser.id);
                const data = res.data;

                dispatch(fetchNewFriendRequests(currentUser.id));
                dispatch(fetchChats(currentUser.id));

                if (data.success) {
                    dispatch(profileImageChanged(data.data.profileImage));
                }
            }
        })();
    }, []);

    return <AppNavigation />;
};

export default InitialComponent;
