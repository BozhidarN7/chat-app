import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import { useChat } from 'contexts/ChatCtx';

type Props = {
    roomId: string | undefined;
};

const MessageInput = ({ roomId }: Props) => {
    const [message, setMessage] = useState<string>('');

    const { sendMessage } = useChat();

    const sendMessageHandler = () => {
        sendMessage(roomId, message);
        setMessage('');
    };

    return (
        <Box sx={{ position: 'fixed', bottom: 0, width: '75%' }}>
            <TextField
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                fullWidth
                placeholder="Type a message..."
                multiline={true}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={sendMessageHandler}
                                disabled={roomId ? false : true}
                            >
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default MessageInput;
