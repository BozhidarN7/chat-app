import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Message = () => {
    const theme = useTheme();

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
                Simple text
            </Box>
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
                    backgroundColor: `${theme.palette.secondary.light}`,
                }}
            >
                Simple text
            </Box>
        </Box>
    );
};

export default Message;
