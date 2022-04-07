import { useState } from 'react';

import Grid from '@mui/material/Grid';

import Header from 'components/header/Header';
import SideBar from 'components/chat/SideBar';
import MessagesZone from 'components/chat/MessagesZone';
import MessageInput from 'components/chat/MessageInput';
import { useChat } from 'contexts/ChatCtx';

const HomePage = () => {
    const [roomId, setRoomId] = useState<string>();

    const { openChatRoom } = useChat();

    const openChatSpaceHandler = async (roomId: string) => {
        setRoomId(roomId);
        await openChatRoom(roomId);
    };

    return (
        <>
            <Header />
            <Grid container>
                <Grid
                    item
                    xs={3}
                    sx={{ height: '93.2vh', overflowY: 'scroll' }}
                >
                    <SideBar
                        openChatSpaceHandler={openChatSpaceHandler}
                        roomId={roomId}
                    />
                </Grid>
                <Grid item sx={{ height: '90vh' }} xs={true}>
                    <MessagesZone roomId={roomId} />
                    <MessageInput roomId={roomId} />
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
