import { HubConnection } from '@microsoft/signalr';
import React, { useContext, useState } from 'react';

interface ChatCtxInterface {
    connection: HubConnection | undefined;
    saveConnection: any;
    sendMessage: any;
}

const ChatCtx = React.createContext<ChatCtxInterface>({} as ChatCtxInterface);

export const useChat = () => {
    return useContext(ChatCtx);
};

type Props = {
    children: React.ReactNode[] | React.ReactNode;
};

export const ChatProvider = ({ children }: Props) => {
    const [connection, setConnection] = useState<HubConnection>();

    const saveConnection = (connection: HubConnection) => {
        setConnection(connection);
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
        saveConnection,
        sendMessage,
    };

    return <ChatCtx.Provider value={value}>{children}</ChatCtx.Provider>;
};
