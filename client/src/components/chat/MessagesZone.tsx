import { useRef, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Message from 'components/chat/Message';

import { useAppSelector } from 'app/hooks';

type Props = {
    roomId: string | undefined;
};

const MessagesZone = ({ roomId }: Props) => {
    const messageBoxRef = useRef<HTMLDivElement>(null);
    const messages = useAppSelector((state) =>
        state.chats.chats.find((chat) => chat.roomId === roomId)
    )?.messages;

    useEffect(() => {
        if (messageBoxRef && messageBoxRef.current) {
            const { scrollHeight, clientHeight } = messageBoxRef.current;
            messageBoxRef.current.scrollTo({
                left: 0,
                top: scrollHeight - clientHeight,
                behavior: 'smooth',
            });
        }
    }, [messages]);

    return roomId ? (
        <>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    height: '97%',
                    overflowY: 'scroll',
                    pt: 2,
                }}
                ref={messageBoxRef}
            >
                {messages?.map((message, index) => (
                    <Message
                        senderFullName={message.senderFullName}
                        message={message.message}
                        dateAndTime={message.messageDateAndTime}
                        key={index}
                    />
                ))}
                <Box sx={{ absolute: 'fixed', left: 15, bottom: 5 }}>
                    <Fab size="medium" color="secondary" aria-label="add">
                        <ArrowDownwardIcon />
                    </Fab>
                </Box>
            </Box>
        </>
    ) : (
        <Typography sx={{ ml: 2, mt: 2 }}>
            Choose a chat space from the menu
        </Typography>
    );
};

export default MessagesZone;
