import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import Header from 'components/header/Header';
import SideBar from 'components/chat/SideBar';
import MessagesZone from 'components/chat/MessagesZone';
import MessageInput from 'components/chat/MessageInput';

import { useChat } from 'contexts/ChatCtx';

const HomePage = () => {
    const [openChatSpace, setOpenChatSpace] = useState(false);
    const [roomId, setRoomId] = useState<string>();

    const { joinChatRoom } = useChat();

    const openChatSpaceHandler = (roomId: string) => {
        setRoomId(roomId);
        setOpenChatSpace(true);
    };

    useEffect(() => {
        joinChatRoom(roomId);
    }, [roomId]);

    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={3} sx={{ height: '100vh', overflowY: 'scroll' }}>
                    <SideBar
                        openChatSpace={openChatSpace}
                        openChatSpaceHandler={openChatSpaceHandler}
                    />
                </Grid>
                <Grid item sx={{ height: '100vh' }} xs={true}>
                    <MessagesZone openChatSpace={openChatSpace} />
                    <MessageInput roomId={roomId} />
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
