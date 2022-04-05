import { RefObject } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import { useAppSelector } from 'app/hooks';

type Props = {
    notificationMenuRef: RefObject<HTMLUListElement>;
};

const NotificationMenu = ({ notificationMenuRef }: Props) => {
    const newFriendShipRequests = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );

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
            }}
        >
            {newFriendShipRequests.map((nfr) => (
                <ListItem key={nfr.senderId}>
                    <ListItemText
                        primary={nfr.senderFullName}
                        secondary="Please add me to your friends list"
                    />
                    <Button>Accept</Button>
                    <Button>Reject</Button>
                </ListItem>
            ))}
        </List>
    );
};

export default NotificationMenu;
