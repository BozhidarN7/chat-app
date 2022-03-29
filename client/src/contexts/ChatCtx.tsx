import { HubConnection } from '@microsoft/signalr';
import React, { useContext, useState } from 'react';

interface ChatCtxInterface {
    connection: HubConnection | undefined;
    messages: message[];
    saveConnection: any;
    sendMessage: any;
    joinChatRoom: any;
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
    const [messages, setMessages] = useState<message[]>([]);
    const [connection, setConnection] = useState<HubConnection>();

    const saveConnection = (connection: HubConnection) => {
        setConnection(connection);
    };

    const joinChatRoom = async (roomId: string) => {
        const currentUser = JSON.parse(localStorage.getItem('userInfo')!);

        await connection?.invoke('OpenChatRoom', {
            roomId,
            fullName: `${currentUser.firstName} ${currentUser.lastName}`,
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
            console.log('here');
            console.log(messages);
            // setMessages(prev => )
        });
    };

    const sendMessage = async (roomId: string, message: string) => {
        const currentUser = JSON.parse(localStorage.getItem('userInfo')!);

        await connection?.invoke(
            'SendMessage',
            {
                roomId,
                fullName: `${currentUser.firstName} ${currentUser.lastName}`,
            },
            message
        );
    };

    const value = {
        connection,
        messages,
        saveConnection,
        sendMessage,
        joinChatRoom,
    };

    return <ChatCtx.Provider value={value}>{children}</ChatCtx.Provider>;
};
