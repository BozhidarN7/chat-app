import { toast } from 'react-toastify';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Header from 'components/header/Header';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { friendshipRequestDeleted } from 'features/usersSlice';
import { acceptRejectFriendshipRequest } from 'services/friendshipRequestsService';
import { useChat } from 'contexts/ChatCtx';

const NotificationPage = () => {
    const dispatch = useAppDispatch();
    const { acceptFriendship } = useChat();
    const newFriendShipRequests = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );

    const acceptFriendshipHandler = async (friendshipId: string) => {
        try {
            await acceptRejectFriendshipRequest(true, friendshipId);
            await dispatch(friendshipRequestDeleted(friendshipId));
            await acceptFriendship(friendshipId);
            toast.success('Friendship request accepted');
        } catch (err) {
            console.log(err);
        }
    };

    const rejectFriendshipHandler = async (friendshipId: string) => {
        try {
            await acceptRejectFriendshipRequest(false, friendshipId);
            dispatch(friendshipRequestDeleted(friendshipId));
            toast.success('Friendship request rejected');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box>
            <Header />
            <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ p: 2, pb: 0 }}
            >
                Notifications
            </Typography>
            {newFriendShipRequests.length > 0 ? (
                <List
                    sx={{
                        backgroundColor: 'background.paper',
                        maxHeight: 280,
                        color: 'black',
                    }}
                >
                    {newFriendShipRequests.map((nfr) => (
                        <ListItem key={nfr.friendshipId}>
                            <ListItemText
                                primary={nfr.senderFullName}
                                secondary="Please add me to your friends list"
                            />
                            <Button
                                onClick={acceptFriendshipHandler.bind(
                                    null,
                                    nfr.friendshipId
                                )}
                            >
                                Accept
                            </Button>
                            <Button
                                onClick={rejectFriendshipHandler.bind(
                                    null,
                                    nfr.friendshipId
                                )}
                            >
                                Reject
                            </Button>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography
                    variant="body1"
                    gutterBottom
                    component="div"
                    sx={{ p: 2, pb: 0 }}
                >
                    You have no missed notfifications
                </Typography>
            )}
        </Box>
    );
};

export default NotificationPage;
