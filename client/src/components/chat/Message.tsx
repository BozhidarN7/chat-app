import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import MessageOptionsMenu from 'components/menus/MessageOptionsMenu';
import { useChat } from 'contexts/ChatCtx';

type Props = {
    message: string;
    messageId: string;
    senderId: string;
    senderFullName: string;
    dateAndTime: string;
    type: string;
    firstMessageElRef: ((node: any) => void) | null;
};

const Message = ({
    firstMessageElRef,
    message,
    messageId,
    senderId,
    senderFullName,
    dateAndTime,
    type,
}: Props) => {
    const theme = useTheme();
    const { editMessage, deleteMessage } = useChat();

    const [editValue, setEditValue] = useState('');
    const [openEditField, setOpenEditField] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMessageOptionsMenu = Boolean(anchorEl);

    const currentUser = JSON.parse(localStorage.getItem('userInfo')!);

    const isLocalUser = currentUser.fullName.trim() === senderFullName.trim();

    const openMessageOptionsMenuHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (senderId !== currentUser.id) return;
        if (e.type === 'contextmenu') setAnchorEl(e.currentTarget);
    };

    const closeMessageOptionsMenuHandler = async (action: string) => {
        setAnchorEl(null);

        if (action === 'edit' && type === 'text') {
            setOpenEditField(true);
            setEditValue(message);
        }
        if (action === 'delete') {
            await deleteMessage(messageId, currentUser.id, type);
        } else if (action === 'copy') {
            copy(message);
        }
    };

    const editHandler = () => {
        editMessage(messageId, currentUser.id, editValue);
        setOpenEditField(false);
    };

    return (
        <Box
            ref={firstMessageElRef}
            sx={{
                display: 'flex',
                alignSelf: isLocalUser ? 'flex-end' : 'center',
            }}
        >
            <Avatar
                sx={{
                    width: 56,
                    height: 56,
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
                {type === 'file' ? (
                    <Box
                        onClick={openMessageOptionsMenuHandler}
                        onContextMenu={openMessageOptionsMenuHandler}
                        sx={{
                            display: 'inline-block',
                            my: 1,
                            mr: 1,
                            p: 2,
                            minWidth: 100,
                            maxWidth: 600,
                        }}
                    >
                        <img
                            src={`data:image/jpeg;base64,${message}`}
                            style={{
                                maxHeight: '400px',
                                maxWidth: 400,
                                minWidth: 400,
                            }}
                            alt=""
                        />
                    </Box>
                ) : (
                    <Box
                        onClick={openMessageOptionsMenuHandler}
                        onContextMenu={openMessageOptionsMenuHandler}
                        sx={{
                            display: 'inline-block',
                            my: 1,
                            mr: 1,
                            p: 2,
                            minWidth: 100,
                            maxWidth: 400,
                            borderRadius: 3,
                            boxShadow: 2,
                            color: 'white',
                            overflow: 'hidden',
                            backgroundColor:
                                isLocalUser && type
                                    ? `${theme.palette.primary.light}`
                                    : `${theme.palette.secondary.light}`,
                        }}
                    >
                        {message}
                        {openEditField ? (
                            <>
                                <TextField
                                    onChange={(e) => setEditValue(e.currentTarget.value)}
                                    value={editValue}
                                    variant="standard"
                                    sx={{ mr: 4 }}
                                />
                                <Button onClick={editHandler} variant="contained">
                                    Edit
                                </Button>
                            </>
                        ) : null}
                    </Box>
                )}
                <MessageOptionsMenu
                    anchorEl={anchorEl}
                    openMessageOptionsMenu={openMessageOptionsMenu}
                    closeMessageOptionsMenuHandler={closeMessageOptionsMenuHandler}
                />

                {/* <Typography sx={{ fontSize: 13 }}>{dateAndTime}</Typography> */}
            </Box>
        </Box>
    );
};

export default Message;
