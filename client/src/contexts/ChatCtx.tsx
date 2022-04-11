import { HubConnection } from '@microsoft/signalr';
import React, { useCallback, useContext, useState } from 'react';

import { useAuth } from 'contexts/AuthCtx';
import { useAppDispatch } from 'app/hooks';
import {
    messageDeleted,
    newChatAdded,
    newMessageAdded,
    previousMessagesAdded,
} from 'features/chatsSlice';
import {
    deleteMessage as deleteMessageApi,
    editMessage as editMessageApi,
} from 'services/messageService';

interface ChatCtxInterface {
    connection: HubConnection | undefined;
    saveConnection: any;
    sendMessage: any;
    openChatRoom: any;
    sendFriendRequest: any;
    acceptFriendship: any;
    editMessage: any;
    deleteMessage: any;
}

const ChatCtx = React.createContext<ChatCtxInterface>({} as ChatCtxInterface);

export const useChat = () => {
    return useContext(ChatCtx);
};

type Props = {
    children: React.ReactNode[] | React.ReactNode;
};

export const ChatProvider = ({ children }: Props) => {
    const dispatch = useAppDispatch();
    const [connection, setConnection] = useState<HubConnection>();

    const { currentUser } = useAuth();

    const saveConnection = useCallback((connection: HubConnection) => {
        setConnection(connection);
    }, []);

    const openChatRoom = async (roomId: string) => {
        connection?.on('PreviousConversation', (roomId, messages, files) => {
            const combine = [...messages, ...files].sort(
                (a, b) =>
                    (new Date(a.messageDateAndTime) as any) -
                    (new Date(b.messageDateAndTime) as any)
            );
            dispatch(previousMessagesAdded({ roomId, messages: combine }));
        });
        await connection?.invoke('OpenChatRoom', {
            roomId,
            fullName: `${currentUser?.id}`,
        });
        connection?.on('ReceiveMessage', (roomId: string, message) => {
            dispatch(newMessageAdded({ roomId, message }));
        });
        connection?.off('PreviousConversation');
    };

    const sendMessage = async (roomId: string, message: string) => {
        await connection?.invoke(
            'SendMessage',
            {
                roomId,
                userId: `${currentUser?.id}`,
            },
            message
        );
    };

    const sendFriendRequest = async (userId: string) => {
        await connection?.invoke('SendFriendRequest', currentUser?.id, userId);
    };

    const acceptFriendship = async (friendshipId: string) => {
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
        await connection?.invoke('AcceptFriendship', friendshipId);
        connection?.off('AcceptFriendship');
    };

    const editMessage = async (
        messageId: string,
        userId: string,
        newText: string
    ) => {};

    const deleteMessage = async (
        messageId: string,
        userId: string,
        type: string
    ) => {
        connection?.on('DeleteMessage', (messageId, roomId) => {
            dispatch(messageDeleted({ messageId, roomId }));
        });

        await deleteMessageApi(messageId, userId, type);

        // connection?.off('DeleteMessage');
    };

    const value = {
        connection,
        saveConnection,
        sendMessage,
        openChatRoom,
        sendFriendRequest,
        acceptFriendship,
        editMessage,
        deleteMessage,
    };

    return <ChatCtx.Provider value={value}>{children}</ChatCtx.Provider>;
};
