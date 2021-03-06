import React, { useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

import { useTheme } from '@mui/material/styles';

import SearchField from 'components/common/SearrchField';
import AddButton from 'components/common/buttons/AddButton';
import { fetchUsers } from 'features/usersSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useAuth } from 'contexts/AuthCtx';

type Props = {
    roomId: string | undefined;
    openChatSpaceHandler: (roomId: string) => void;
};

const SideBar = ({ openChatSpaceHandler, roomId }: Props) => {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const [chatSearchQuery, setChatSearchQuery] = useState('');
    const [addFriendClicked, setAddFriendClicked] = useState(false);
    const searchFieldRef = useRef<HTMLInputElement>();

    const { currentUser } = useAuth();
    let chats = useAppSelector((state) => state.chats.chats).filter((c) =>
        c.friendFullName.toLowerCase().includes(chatSearchQuery.toLowerCase())
    );

    const searchChatHandler = (query: string) => {
        setChatSearchQuery(query);
    };

    const addFriendHandler = () => {
        setAddFriendClicked((prev) => !prev);

        if (searchFieldRef.current && !addFriendClicked) {
            searchFieldRef.current.focus();
            dispatch(fetchUsers());
        }
    };

    const getFriendFullNameFirstPart = (
        friendFullName: string,
        query: string
    ) => {
        const startPosition = friendFullName
            .toLowerCase()
            .indexOf(query.toLocaleLowerCase());
        return friendFullName.substring(0, startPosition);
    };

    const getFriendFullNameLastPart = (
        friendFullName: string,
        query: string
    ) => {
        const startPosition = friendFullName
            .toLowerCase()
            .indexOf(query.toLocaleLowerCase());
        const endPosition = startPosition + query.length;
        return friendFullName.substring(endPosition);
    };

    const getFriendFullNameBoldPart = (
        friendFullName: string,
        query: string
    ) => {
        const startPosition = friendFullName
            .toLowerCase()
            .indexOf(query.toLocaleLowerCase());
        const endPosition = startPosition + query.length;
        return friendFullName.substring(startPosition, endPosition);
    };

    return (
        <>
            <Paper square sx={{ height: '100%' }}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            component="div"
                            sx={{ p: 2, pb: 0 }}
                        >
                            Chats
                        </Typography>
                    </Grid>
                    <Grid item container xs={6}>
                        <AddButton
                            styles={{ ml: 'auto' }}
                            addFriendClicked={addFriendClicked}
                            addFriendHandler={addFriendHandler}
                        />
                    </Grid>
                </Grid>
                <SearchField
                    addFriendClicked={addFriendClicked}
                    searchFieldRef={searchFieldRef}
                    searchChatHandler={searchChatHandler}
                />
                <List sx={{ mb: 2 }}>
                    {chats.map((chat: any) => (
                        <React.Fragment key={chat.roomId}>
                            <ListItemButton
                                onClick={openChatSpaceHandler.bind(
                                    null,
                                    chat.roomId
                                )}
                                selected={chat.roomId === roomId ? true : false}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Profile Picture"
                                        // src={person}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ color: theme.palette.primary.main }}
                                    primary={
                                        <>
                                            <Typography component="span">
                                                {getFriendFullNameFirstPart(
                                                    chat.friendFullName,
                                                    chatSearchQuery
                                                )}
                                            </Typography>
                                            <Typography
                                                component="span"
                                                sx={{ fontWeight: 'bold' }}
                                            >
                                                {getFriendFullNameBoldPart(
                                                    chat.friendFullName,
                                                    chatSearchQuery
                                                )}
                                            </Typography>
                                            <Typography component="span">
                                                {getFriendFullNameLastPart(
                                                    chat.friendFullName,
                                                    chatSearchQuery
                                                )}
                                            </Typography>
                                        </>
                                    }
                                    secondary={
                                        currentUser?.fullName ===
                                        chat.friendFullName
                                            ? `${chat.friendFullName} accepted your friendship request`
                                            : 'New friend. Be the first to send message'
                                    }
                                />
                            </ListItemButton>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </>
    );
};

export default SideBar;
