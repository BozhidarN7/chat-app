import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { useAuth } from 'contexts/AuthCtx';

type Props = {
    message: string;
    senderFullName: string;
    dateAndTime: string;
};

const Message = ({ message, senderFullName, dateAndTime }: Props) => {
    const theme = useTheme();
    const currentUser = JSON.parse(localStorage.getItem('userInfo')!);

    const isLocalUser = currentUser.fullName.trim() === senderFullName.trim();

    return (
        <Box
            sx={{
                display: 'flex',
                alignSelf: isLocalUser ? 'flex-end' : 'center',
            }}
        >
            <Avatar
                sx={{
                    width: 36,
                    height: 36,
                    fontSize: 18,
                    mr: 1,
                    mt: 2,
                    alignSelf: 'center',
                }}
            >
                {`${senderFullName[0]}${senderFullName.split(' ')[1][0]}`}
            </Avatar>
            <Box>
                <Typography sx={{ fontSize: 13 }}>{senderFullName}</Typography>
                <Box
                    sx={{
                        display: 'inline-block',
                        my: 1,
                        mr: 1,
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
                {/* <Typography sx={{ fontSize: 13 }}>{dateAndTime}</Typography> */}
            </Box>
        </Box>
    );
};

export default Message;
