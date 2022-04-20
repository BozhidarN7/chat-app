import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Header from 'components/header/Header';
import { useAppSelector } from 'app/hooks';

import useFriendshipRequest from 'hooks/useFriendshipRequest';

const NotificationPage = () => {
    const newFriendShipRequests = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );

    const { acceptFriendshipHandler, rejectFriendshipHandler } =
        useFriendshipRequest();

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
