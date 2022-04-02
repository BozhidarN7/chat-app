import React, { useState, useEffect, useRef } from 'react';
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
import { useChat } from 'contexts/ChatCtx';
import { useAuth } from 'contexts/AuthCtx';
import { getFriends } from 'services/userService';
import AddButton from 'components/common/AddButton';

type Props = {
    openChatSpace: boolean;
    openChatSpaceHandler: (roomId: string) => void;
};

const SideBar = ({ openChatSpace, openChatSpaceHandler }: Props) => {
    const testChats = [
        {
            id: 1,
            primary: 'Martin Stefanov',
            secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        },
    ];
    const theme = useTheme();
    const { currentUser } = useAuth();
    const { connection } = useChat();
    const [chats, setChats] = useState([]);
    const [refetch, setRefetch] = useState(true);
    const [addFriendClicked, setAddFriendClicked] = useState(false);
    const searchFieldRef = useRef<HTMLInputElement>();

    const addFriendHandler = () => {
        setAddFriendClicked((prev) => !prev);

        if (searchFieldRef.current && !addFriendClicked) {
            searchFieldRef.current.focus();
        }
    };

    useEffect(() => {
        getFriends(currentUser?.id!).then((data) => {
            setChats(data.data.users);
        });
        return () => {
            setChats([]);
        };
    }, [currentUser?.id, refetch]);

    connection?.on('ReceiveInvitation', (username) => {
        setRefetch((prev) => !prev);
    });

    return (
        <>
            <Paper square sx={{ height: '100%' }}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
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
                <SearchField addFriendClicked={addFriendClicked} searchFieldRef={searchFieldRef} />
                <List sx={{ mb: 2 }}>
                    <React.Fragment>
                        <ListItem button onClick={openChatSpaceHandler.bind(null, '')}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Profile Picture"
                                    // src={person}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ color: theme.palette.primary.main }}
                                primary={testChats[0].primary}
                                secondary={testChats[0].secondary}
                            />
                        </ListItem>
                    </React.Fragment>
                    {chats.map((chat: any) => (
                        <React.Fragment key={chat.id}>
                            <ListItem button onClick={openChatSpaceHandler.bind(null, chat.roomId)}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Profile Picture"
                                        // src={person}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ color: theme.palette.primary.main }}
                                    primary={`${chat.firstName} ${chat.lastName}`}
                                    secondary={''}
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
