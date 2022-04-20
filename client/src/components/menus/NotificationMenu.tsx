import { RefObject } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import { useAppSelector } from 'app/hooks';

import useFriendshipRequest from 'hooks/useFriendshipRequest';

type Props = {
    notificationMenuRef: RefObject<HTMLUListElement>;
};

const NotificationMenu = ({ notificationMenuRef }: Props) => {
    const newFriendShipRequests = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );

    const { acceptFriendshipHandler, rejectFriendshipHandler } =
        useFriendshipRequest();

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
