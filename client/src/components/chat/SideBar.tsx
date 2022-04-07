import React, { useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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
    openChatSpaceHandler: (roomId: string) => void;
};

const SideBar = ({ openChatSpaceHandler }: Props) => {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const [currentChatId, setCurrentChatId] = useState('');
    const [addFriendClicked, setAddFriendClicked] = useState(false);
    const searchFieldRef = useRef<HTMLInputElement>();

    const { currentUser } = useAuth();
    const chats = useAppSelector((state) => state.chats.chats);

    const addFriendHandler = () => {
        setAddFriendClicked((prev) => !prev);

        if (searchFieldRef.current && !addFriendClicked) {
            searchFieldRef.current.focus();
            dispatch(fetchUsers());
        }
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
                />
                <List sx={{ mb: 2 }}>
                    {chats.map((chat: any) => (
                        <React.Fragment key={chat.roomId}>
                            <ListItem
                                button
                                onClick={openChatSpaceHandler.bind(
                                    null,
                                    chat.roomId
                                )}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Profile Picture"
                                        // src={person}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ color: theme.palette.primary.main }}
                                    primary={chat.friendFullName}
                                    secondary={
                                        currentUser?.fullName ===
                                        chat.friendFullName
                                            ? `${chat.friendFullName} accepted your friendship request`
                                            : 'New friend. Be the first to send message'
                                    }
                                />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </>
    );
};

export default SideBar;
