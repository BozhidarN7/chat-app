import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Message from 'components/chat/Message';

type Props = {
    openChatSpace: boolean;
};

const MessagesZone = ({ openChatSpace }: Props) => {
    return openChatSpace ? (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    height: '90%',
                    overflowY: 'scroll',
                }}
            >
                <Message />
            </Box>
        </>
    ) : (
        <Typography sx={{ ml: 2, mt: 2 }}>
            Choose a chat space from the menu
        </Typography>
    );
};

export default MessagesZone;
