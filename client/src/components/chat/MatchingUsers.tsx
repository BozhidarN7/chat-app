import { MutableRefObject, RefObject } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/system/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

import { User } from 'interfaces/userInterfaces';

type Props = {
    matchingUsersRef: RefObject<HTMLUListElement>;
    searchValue: string;
    matchedUsers: User[];
};

const MatchingUsers = ({ matchingUsersRef, matchedUsers, searchValue }: Props) => {
    const theme = useTheme();

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
                const startPosition = u.fullName.toLowerCase().indexOf(searchValue.toLowerCase());
                const endPosition = startPosition + searchValue.length;
                const boldPart = u.fullName.substring(startPosition, endPosition);
                const firstPart = u.fullName.substring(0, startPosition);
                const lastPart = u.fullName.substring(endPosition);
                console.log(lastPart);
                return (
                    <ListItem key={u.id} disablePadding>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar alt={`${u.fullName}`} />
                            </ListItemAvatar>
                            {searchValue === '' ? (
                                <ListItemText id={labelId} primary={u.fullName} />
                            ) : (
                                <>
                                    <Box component="pre" sx={{ fontFamily: theme.typography.fontFamily }}>
                                        {firstPart}
                                    </Box>
                                    <Box
                                        component="pre"
                                        sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}
                                    >
                                        {boldPart}
                                    </Box>
                                    <Box component="pre" sx={{ fontFamily: theme.typography.fontFamily }}>
                                        {lastPart}
                                    </Box>
                                </>
                            )}
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
                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })} */}
        </List>
    );
};

export default MatchingUsers;
