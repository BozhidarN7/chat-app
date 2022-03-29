import { useState } from 'react';

import Grid from '@mui/material/Grid';

import Header from 'components/header/Header';
import SideBar from 'components/chat/SideBar';
import MessagesZone from 'components/chat/MessagesZone';
import MessageInput from 'components/chat/MessageInput';

const HomePage = () => {
    const [openChatSpace, setOpenChatSpace] = useState(false);

    const openChatSpaceHandler = () => {
        setOpenChatSpace(true);
    };

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
                <Grid item xs={true}>
                    <MessagesZone openChatSpace={openChatSpace} />
                    <MessageInput />
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
