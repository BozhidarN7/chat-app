import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Header from 'components/header/Header';
import SideBar from 'components/chat/SideBar';
import MessagesZone from 'components/chat/MessagesZone';
import MessageInput from 'components/chat/MessageInput';
import { useChat } from 'contexts/ChatCtx';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectAreChatsShown, showChatsBtnClicked } from 'features/chatsSlice';

const HomePage = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();

    const [roomId, setRoomId] = useState<string>();
    const { openChatRoom } = useChat();
    const areChatsShown = useAppSelector((state) =>
        selectAreChatsShown(state.chats)
    );
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const openChatSpaceHandler = async (roomId: string) => {
        if (isSmall) {
            dispatch(showChatsBtnClicked(!areChatsShown));
        }
        setRoomId(roomId);
        await openChatRoom(roomId);
    };

    return (
        <>
            <Header />
            <Grid container>
                <Slide
                    direction="right"
                    appear={false}
                    in={areChatsShown}
                    mountOnEnter
                    unmountOnExit
                    timeout={500}
                >
                    <Grid
                        item
                        xs={isSmall ? (areChatsShown ? 12 : 0) : 3}
                        sx={{
                            height: '93.2vh',
                            overflowY: 'scroll',
                            width: 0,
                        }}
                    >
                        <SideBar
                            openChatSpaceHandler={openChatSpaceHandler}
                            roomId={roomId}
                        />
                    </Grid>
                </Slide>
                <Grid item sx={{ height: '90vh' }} xs={true}>
                    {roomId ? (
                        <MessagesZone roomId={roomId} />
                    ) : (
                        <Typography sx={{ ml: 2, mt: 2 }}>
                            Choose a chat space from the menu
                        </Typography>
                    )}

                    <MessageInput roomId={roomId} />
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
