import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import { useChat } from 'contexts/ChatCtx';
import { useAuth } from 'contexts/AuthCtx';
import { sendFile } from 'services/messageService';
import UploadFileButton from 'components/common/buttons/UploadFileButton';
import { useAppSelector } from 'app/hooks';
import { selectAreChatsShown } from 'features/chatsSlice';

type Props = {
    roomId: string | undefined;
};

const MessageInput = ({ roomId }: Props) => {
    const theme = useTheme();
    const { sendMessage } = useChat();
    const { currentUser } = useAuth();
    const [message, setMessage] = useState<string>('');
    const areChatsOpen = useAppSelector((state) =>
        selectAreChatsShown(state.chats)
    );
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const changeFileHandler = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.files) {
            const formData = new FormData();
            formData.append('file', e.target.files[0]);
            formData.append('senderFullName', currentUser?.fullName!);
            formData.append('senderId', currentUser?.id!);

            await sendFile(roomId!, formData);
            e.target.value = '';
        }
    };

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

    if (!roomId || (isSmall && areChatsOpen)) {
        return null;
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                width: areChatsOpen ? '75%' : '100%',
                bgcolor: 'white',
                maxHeight: 150,
                zIndex: 10,
            }}
        >
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
                        <>
                            <UploadFileButton
                                roomId={roomId}
                                changeFileHandler={changeFileHandler}
                            />
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={sendMessageHandler}
                                    disabled={roomId ? false : true}
                                >
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        </>
                    ),
                }}
            />
        </Box>
    );
};

export default MessageInput;
