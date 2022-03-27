import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MessageInput = () => {
    return (
        <Box sx={{ position: 'fixed', top: 'auto', bottom: 0, width: '100%' }}>
            <TextField
                fullWidth
                autoFocus={true}
                // label="Multiline Placeholder"
                placeholder="Type a message..."
                multiline={true}
            />
        </Box>
    );
};

export default MessageInput;
