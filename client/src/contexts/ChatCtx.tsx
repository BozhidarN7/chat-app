import { HubConnection } from '@microsoft/signalr';
import React, { useCallback, useContext, useState } from 'react';

import { useAuth } from 'contexts/AuthCtx';
import { useAppDispatch } from 'app/hooks';
import { messageDeleted, messageEdited, newMessageAdded, previousMessagesAdded } from 'features/chatsSlice';
import { deleteMessage as deleteMessageApi, editMessage as editMessageApi } from 'services/messageService';

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
    let count = 0;

    const { currentUser } = useAuth();

    const saveConnection = useCallback((connection: HubConnection) => {
        setConnection(connection);
    }, []);

    const openChatRoom = async (roomId: string) => {
        count++;
        connection?.on('PreviousConversation', (roomId, messages, files) => {
            const combine = [...messages, ...files].sort(
                (a, b) => (new Date(a.messageDateAndTime) as any) - (new Date(b.messageDateAndTime) as any)
            );
            dispatch(previousMessagesAdded({ roomId, messages: combine }));
        });

        if (count > 1) {
            connection?.off('ReceiveMessage');
            connection?.off('EditMessage');
            connection?.off('DeleteMessage');
        }

        await connection?.invoke('OpenChatRoom', {
            roomId,
            fullName: `${currentUser?.id}`,
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
        await connection?.invoke('AcceptFriendship', friendshipId);
    };

    const editMessage = async (messageId: string, userId: string, newText: string) => {
        await editMessageApi(messageId, userId, { newText });
    };

    const deleteMessage = async (messageId: string, userId: string, type: string) => {
        await deleteMessageApi(messageId, userId, type);
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
