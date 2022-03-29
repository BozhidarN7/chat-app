import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { useAuth } from 'contexts/AuthCtx';

type Props = {
    message: string;
    senderName: string;
};

const Message = ({ message, senderName }: Props) => {
    const theme = useTheme();
    const currentUser = JSON.parse(localStorage.getItem('userInfo')!);
    console.log(currentUser.fullName);
    console.log(senderName);

    const isLocalUser = currentUser.fullName.trim() === senderName.trim();
    console.log(isLocalUser);

    return (
        <Box
            sx={{
                alignSelf: isLocalUser ? 'flex-end' : 'center',
            }}
        >
            <Box
                sx={{
                    display: 'inline-block',
                    m: 1,
                    p: 2,
                    minWidth: 100,
                    maxWidth: 400,
                    widht: 'auto',
                    borderRadius: 3,
                    boxShadow: 2,
                    color: 'white',
                    backgroundColor: isLocalUser
                        ? `${theme.palette.primary.light}`
                        : `${theme.palette.secondary.light}`,
                }}
            >
                {message}
            </Box>
        </Box>
    );
};

export default Message;
