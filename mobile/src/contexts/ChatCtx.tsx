import React, { useCallback, useContext, useState } from 'react';
import { HubConnection } from '@microsoft/signalr';
import { useAppDispatch } from '../app/hooks';
import {
    previousMessagesAdded,
    newMessageAdded,
    messageDeleted,
    messageEdited,
} from '../features/chatsSlice';
import { useAuth } from './AuthCtx';
import {
    deleteMessage as deleteMessageApi,
    editMessage as editMessageApi,
} from '../services/messageService';

interface ChatCtxInterface {
    connection: HubConnection | undefined;
    loadingChat: boolean;
    saveConnection: any;
    openChatRoom: any;
    sendFriendRequest: any;
    acceptFriendship: any;
    sendMessage: any;
    deleteMessage: any;
    editMessage: any;
}

const ChatCtx = React.createContext<ChatCtxInterface>({} as ChatCtxInterface);

export const useChat = () => useContext(ChatCtx);

type Props = {
    children: React.ReactNode[] | React.ReactNode;
};

const ChatProvider = ({ children }: Props) => {
    const dispatch = useAppDispatch();
    const [connection, setConnection] = useState<HubConnection>();
    const [loadingChat, setLoadingChat] = useState(false);

    const { currentUser } = useAuth();

    const saveConnection = useCallback((connection: HubConnection) => {
        setConnection(connection);
    }, []);

    const openChatRoom = async (roomId: string) => {
        setLoadingChat(true);
        connection?.on('PreviousConversation', (roomId, messages, files) => {
            const combine = [...messages, ...files].sort(
                (a, b) =>
                    (new Date(a.messageDateAndTime) as any) -
                    (new Date(b.messageDateAndTime) as any)
            );
            dispatch(previousMessagesAdded({ roomId, messages: combine }));
            setLoadingChat(false);
        });

        await connection?.invoke('OpenChatRoom', {
            roomId,
            fullName: `${currentUser?.id}`,
        });
    };

    const sendFriendRequest = async (userId: string) => {
        await connection?.invoke('SendFriendRequest', currentUser?.id, userId);
    };

    const acceptFriendship = async (friendshipId: string) => {
        await connection?.invoke('AcceptFriendship', friendshipId);
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

    const editMessage = async (
        messageId: string,
        userId: string,
        newText: string
    ) => {
        await editMessageApi(messageId, userId, { newText });
    };

    const deleteMessage = async (
        messageId: string,
        userId: string,
        type: string
    ) => {
        await deleteMessageApi(messageId, userId, type);
    };

    const value = {
        connection,
        loadingChat,
        saveConnection,
        openChatRoom,
        sendFriendRequest,
        acceptFriendship,
        sendMessage,
        deleteMessage,
        editMessage,
    };

    return <ChatCtx.Provider value={value}>{children}</ChatCtx.Provider>;
};

export default ChatProvider;
