import { MutableRefObject, RefObject } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

import { User } from 'interfaces/userInterfaces';

type Props = {
    matchingUsersRef: RefObject<HTMLUListElement>;
    matchedUsers: User[];
};

const MatchingUsers = ({ matchingUsersRef, matchedUsers }: Props) => {
    const theme = useTheme();
    console.log(matchedUsers);
    return (
        <List
            ref={matchingUsersRef}
            dense
            sx={{
                width: '93%',
                maxHeight: '35%',
                bgcolor: 'background.paper',
                boxShadow: 2,
                ml: 2,
                borderRadius: theme.shape.borderRadius,
                overflowY: 'scroll',
            }}
        >
            {matchedUsers.map((u) => {
                const labelId = `checkbox-list-secondary-label-${u.id}`;
                return (
                    <ListItem key={u.id} disablePadding>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar alt={`${u.fullName}`} />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={u.fullName} />
                        </ListItemButton>
                    </ListItem>
                );
            })}

            {/* {[0, 1, 2, 3, 4, 5, 6].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem key={value} disablePadding>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${value + 1}`}
                                    src={`/static/images/avatar/${
                                        value + 1
                                    }.jpg`}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                id={labelId}
                                primary={`Line item ${value + 1}`}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })} */}
        </List>
    );
};

export default MatchingUsers;
