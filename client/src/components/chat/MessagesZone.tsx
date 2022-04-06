import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Message from 'components/chat/Message';
import { useAppSelector } from 'app/hooks';

type Props = {
    roomId: string | undefined;
};

const MessagesZone = ({ roomId }: Props) => {
    const messages = useAppSelector((state) =>
        state.chats.chats.find((chat) => chat.roomId === roomId)
    )?.messages;
    return roomId ? (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    height: '97%',
                    overflowY: 'scroll',
                    // pt: 2,
                }}
            >
                {messages?.map((message, index) => (
                    <Message
                        senderName={message.senderFullName}
                        message={message.message}
                        key={index}
                    />
                ))}
            </Box>
        </>
    ) : (
        <Typography sx={{ ml: 2, mt: 2 }}>
            Choose a chat space from the menu
        </Typography>
    );
};

export default MessagesZone;
