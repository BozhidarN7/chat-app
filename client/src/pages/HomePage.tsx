import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Header from 'components/header/Header';
import SideBar from 'components/chat/SideBar';
import MessagesZone from 'components/chat/MessagesZone';
import MessageInput from 'components/chat/MessageInput';

const HomePage = () => {
    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={3} sx={{ height: '100vh', overflowY: 'scroll' }}>
                    <SideBar />
                </Grid>
                <Grid item xs={true}>
                    <MessagesZone />
                    <MessageInput />
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
