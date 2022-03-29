import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

type Props = {
    message: string;
};

const Message = ({ message }: Props) => {
    const theme = useTheme();
    console.log(message);
    return (
        <Box sx={{ alignSelf: 'center' }}>
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
                    backgroundColor: `${theme.palette.primary.light}`,
                }}
            >
                {message}
            </Box>
        </Box>
    );
};

export default Message;
