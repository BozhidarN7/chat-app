import { RefObject } from 'react';
import { toast } from 'react-toastify';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import { friendshipRequestDeleted } from 'features/usersSlice';
import { acceptRejectFriendshipRequest } from 'services/friendshipRequestsService';
import { useChat } from 'contexts/ChatCtx';

type Props = {
    notificationMenuRef: RefObject<HTMLUListElement>;
};

const NotificationMenu = ({ notificationMenuRef }: Props) => {
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
        <List
            ref={notificationMenuRef}
            sx={{
                boxShadow: 2,
                borderRadius: 2,
                backgroundColor: 'background.paper',
                width: 350,
                maxWidth: 600,
                maxHeight: 280,
                position: 'absolute',
                left: -210,
                color: 'black',
                overflowY: 'scroll',
                zIndex: 10,
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
    );
};

export default NotificationMenu;
