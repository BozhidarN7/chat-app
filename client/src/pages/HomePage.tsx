import { useState } from 'react';

import Grid from '@mui/material/Grid';

import Header from 'components/header/Header';
import SideBar from 'components/chat/SideBar';
import MessagesZone from 'components/chat/MessagesZone';
import MessageInput from 'components/chat/MessageInput';

const HomePage = () => {
    const [openChatSpace, setOpenChatSpace] = useState(false);
    const [roomId, setRoomId] = useState<string>();

    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={3} sx={{ height: '100vh', overflowY: 'scroll' }}>
                    <SideBar openChatSpace={openChatSpace} />
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
