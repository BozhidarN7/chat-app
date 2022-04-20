import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import { useAppSelector } from 'app/hooks';
import { useAuth } from 'contexts/AuthCtx';
import { useChat } from 'contexts/ChatCtx';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: -4,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const ProfileMenu = () => {
    const navigate = useNavigate();

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const profileImage = useAppSelector((state) => state.users.profileImage);
    const newFriendShipRequests = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );
    const { logout } = useAuth();
    const { connection } = useChat();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logoutHandler = () => {
        setAnchorElUser(null);

        connection?.off('ReceiveMessage');
        connection?.off('EditMessage');
        connection?.off('DeleteMessage');

        logout();
    };

    const openProfilePageHandler = () => {
        setAnchorElUser(null);
        navigate('/profile');
    };

    const openNotificationsHandler = () => {
        setAnchorElUser(null);
        navigate('/notifications');
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Badge
                        badgeContent={newFriendShipRequests.length}
                        color="secondary"
                    >
                        <Avatar
                            sx={{ width: 24, height: 24 }}
                            src={`data:image/jpeg;base64,${profileImage}`}
                        />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={openNotificationsHandler}>
                    <StyledBadge
                        badgeContent={newFriendShipRequests.length}
                        color="secondary"
                    >
                        <Typography textAlign="center">
                            Notifications
                        </Typography>
                    </StyledBadge>
                </MenuItem>
                <MenuItem onClick={openProfilePageHandler}>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={logoutHandler}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default ProfileMenu;
