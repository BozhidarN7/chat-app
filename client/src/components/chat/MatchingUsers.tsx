import { RefObject, useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/system/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

import { User } from 'interfaces/userInterfaces';
import ConfirmModal from 'components/common/modals/ConfirmModal';
import { useChat } from 'contexts/ChatCtx';

type Props = {
    matchingUsersRef: RefObject<HTMLUListElement>;
    searchValue: string;
    matchedUsers: User[];
};

const MatchingUsers = ({ matchingUsersRef, matchedUsers, searchValue }: Props) => {
    const theme = useTheme();
    const { sendFriendRequest } = useChat();

    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [friendId, setFriendId] = useState('');

    const openConfirmModalHandler = (fullName: string, userId: string) => {
        setOpenConfirmModal(true);
        setFriendId(userId);
        setModalMessage(`Are you sure you want to send a friend request to ${fullName}`);
    };

    const sendFriendRequestHandler = async () => {
        setOpenConfirmModal(false);
        await sendFriendRequest(friendId);
    };

    const closeConfirmModalHandler = () => {
        setOpenConfirmModal(false);
    };

    return (
        <>
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
                    return (
                        <ListItem key={u.id} disablePadding>
                            <ListItemButton onClick={openConfirmModalHandler.bind(null, u.fullName, u.id)}>
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
                                            sx={{
                                                fontWeight: 'bold',
                                                fontFamily: theme.typography.fontFamily,
                                            }}
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
            </List>
            <ConfirmModal
                openConfirmModal={openConfirmModal}
                modalMessage={modalMessage}
                closeConfirmModalHandler={closeConfirmModalHandler}
                confirmHandler={sendFriendRequestHandler}
            />
        </>
    );
};

export default MatchingUsers;
