import { HubConnection } from '@microsoft/signalr';
import React, { useCallback, useContext, useState } from 'react';

import { useAuth } from 'contexts/AuthCtx';
import { useAppDispatch } from 'app/hooks';
import { newChatAdded, newMessageAdded, previousMessagesAdded } from 'features/chatsSlice';

interface ChatCtxInterface {
    connection: HubConnection | undefined;
    saveConnection: any;
    sendMessage: any;
    openChatRoom: any;
    sendFriendRequest: any;
    acceptFriendship: any;
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
        connection?.on('PreviousConversation', (roomId, messages) => {
            dispatch(previousMessagesAdded({ roomId, messages }));
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

    const value = {
        connection,
        saveConnection,
        sendMessage,
        openChatRoom,
        sendFriendRequest,
        acceptFriendship,
    };

    return <ChatCtx.Provider value={value}>{children}</ChatCtx.Provider>;
};
