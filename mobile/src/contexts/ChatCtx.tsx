import React, { useCallback, useContext, useState } from 'react';
import { HubConnection } from '@microsoft/signalr';
import { useAppDispatch } from '../app/hooks';
import { previousMessagesAdded } from '../features/chatsSlice';
import { useAuth } from './AuthCtx';

interface ChatCtxInterface {
    connection: HubConnection | undefined;
    saveConnection: any;
    openChatRoom: any;
}

const ChatCtx = React.createContext<ChatCtxInterface>({} as ChatCtxInterface);

export const useChat = () => useContext(ChatCtx);

type Props = {
    children: React.ReactNode[] | React.ReactNode;
};

const ChatProvider = ({ children }: Props) => {
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
    };

    const value = {
        connection,
        saveConnection,
        openChatRoom,
    };

    return <ChatCtx.Provider value={value}>{children}</ChatCtx.Provider>;
};

export default ChatProvider;
