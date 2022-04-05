import { HubConnection } from '@microsoft/signalr';
import React, { useContext, useState } from 'react';

import { useAuth } from 'contexts/AuthCtx';
import { useAppDispatch } from 'app/hooks';
import { newChatAdded } from 'features/chatsSlice';
interface ChatCtxInterface {
    connection: HubConnection | undefined;
    messages: message[];
    saveConnection: any;
    sendMessage: any;
    joinChatRoom: any;
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

type message = {
    message: string;
    senderName: string;
};

export const ChatProvider = ({ children }: Props) => {
    const dispatch = useAppDispatch();
    const [messages, setMessages] = useState<message[]>([]);
    const [connection, setConnection] = useState<HubConnection>();

    const { currentUser } = useAuth();

    const saveConnection = (connection: HubConnection) => {
        setConnection(connection);
    };

    const joinChatRoom = async (roomId: string) => {
        await connection?.invoke('OpenChatRoom', {
            roomId,
            fullName: `${currentUser?.firstName} ${currentUser?.lastName}`,
        });

        connection?.on(
            'ReceiveMessage',
            (fullName: string, message: string) => {
                setMessages((prev) => [
                    ...prev,
                    { message, senderName: fullName },
                ]);
            }
        );

        connection?.on('PreviousConversation', (messages) => {
            // setMessages(prev => )
        });
    };

    const sendMessage = async (roomId: string, message: string) => {
        await connection?.invoke(
            'SendMessage',
            {
                roomId,
                fullName: `${currentUser?.firstName} ${currentUser?.lastName}`,
            },
            message
        );
    };

    const sendFriendRequest = async (userId: string) => {
        await connection?.invoke('SendFriendRequest', currentUser?.id, userId);
    };

    const acceptFriendship = async (friendshipId: string) => {
        connection?.on('AcceptFriendship', (data) => {
            console.log('here');
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
    };

    const value = {
        connection,
        messages,
        saveConnection,
        sendMessage,
        joinChatRoom,
        sendFriendRequest,
        acceptFriendship,
    };

    return <ChatCtx.Provider value={value}>{children}</ChatCtx.Provider>;
};
