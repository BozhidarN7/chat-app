import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import MessageOptionsMenu from 'components/menus/MessageOptionsMenu';

type Props = {
    message: string;
    senderFullName: string;
    dateAndTime: string;
    type: string;
    firstMessageElRef: ((node: any) => void) | null;
};

const Message = ({
    firstMessageElRef,
    message,
    senderFullName,
    dateAndTime,
    type,
}: Props) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMessageOptionsMenu = Boolean(anchorEl);

    const currentUser = JSON.parse(localStorage.getItem('userInfo')!);

    const isLocalUser = currentUser.fullName.trim() === senderFullName.trim();

    const openMessageOptionsMenuHandler = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.preventDefault();
        if (e.type === 'contextmenu') setAnchorEl(e.currentTarget);
    };
    const closeMessageOptionsMenuHandler = () => {
        setAnchorEl(null);
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
                        <Typography>{message}</Typography>
                    </Box>
                )}
                <MessageOptionsMenu
                    anchorEl={anchorEl}
                    openMessageOptionsMenu={openMessageOptionsMenu}
                    closeMessageOptionsMenuHandler={
                        closeMessageOptionsMenuHandler
                    }
                />

                {/* <Typography sx={{ fontSize: 13 }}>{dateAndTime}</Typography> */}
            </Box>
        </Box>
    );
};

export default Message;
