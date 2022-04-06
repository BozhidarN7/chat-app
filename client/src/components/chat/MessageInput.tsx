import React, { useState } from 'react';

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

    const sendMessageHandler = (
        e: React.KeyboardEvent | React.MouseEvent<HTMLButtonElement>
    ) => {
        if (message.trim() === '') return;

        if (e.type === 'keydown') {
            e = e as React.KeyboardEvent;
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage(roomId, message);
                setMessage('');
            }
        } else {
            sendMessage(roomId, message);
            setMessage('');
        }
    };

    return (
        <Box sx={{ position: 'fixed', bottom: 0, width: '75%', zIndex: 10 }}>
            <TextField
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                fullWidth
                placeholder="Type a message..."
                multiline={true}
                onKeyDown={sendMessageHandler}
                disabled={roomId ? false : true}
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
