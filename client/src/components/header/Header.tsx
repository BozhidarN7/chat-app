import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useAuth } from 'contexts/AuthCtx';
import { useChat } from 'contexts/ChatCtx';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { selectAreChatsShown, showChatsBtnClicked } from 'features/chatsSlice';
import NotificationMenu from 'components/menus/NotificationMenu';
import ProfileMenu from 'components/menus/ProfileMenu';

const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const notificationMenuRef = useRef(null);
    const [showNotificationMenu, setShowNotificationMenu] = useState(false);
    const { currentUser, logout } = useAuth();
    const { connection } = useChat();
    const profileImage = useAppSelector((state) => state.users.profileImage);
    const newFriendShipRequests = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );
    const areChatsShown = useAppSelector((state) =>
        selectAreChatsShown(state.chats)
    );
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const showNotificationMenuHandler = () => {
        setShowNotificationMenu(true);
    };

    const hideNotificationMenuHandler = () => {
        setShowNotificationMenu(false);
    };

    const logoutHandler = () => {
        connection?.off('ReceiveMessage');
        connection?.off('EditMessage');
        connection?.off('DeleteMessage');

        logout();
    };

    const openCloseSideBarHandler = () => {
        dispatch(showChatsBtnClicked(!areChatsShown));
    };

    return (
        <Box
            sx={{
                minHeight: '6.835vh',
            }}
        >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={openCloseSideBarHandler}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        disabled={!isSmall ? true : false}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        onClick={() => navigate('/chat')}
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, cursor: 'pointer' }}
                    >
                        ChatApp
                    </Typography>

                    {currentUser && !isSmall ? (
                        <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            Welcome, {currentUser.fullName}
                        </Typography>
                    ) : null}

                    {currentUser?.id && !isSmall ? (
                        <>
                            <Box
                                sx={{ position: 'relative' }}
                                onMouseOver={showNotificationMenuHandler}
                                onMouseLeave={hideNotificationMenuHandler}
                            >
                                <IconButton color="inherit">
                                    <Badge
                                        badgeContent={
                                            newFriendShipRequests.length
                                        }
                                        color="secondary"
                                    >
                                        <NotificationsIcon color="inherit" />
                                    </Badge>
                                </IconButton>

                                <CSSTransition
                                    in={
                                        showNotificationMenu &&
                                        newFriendShipRequests.length > 0
                                    }
                                    timeout={300}
                                    unmountOnExit
                                    classNames="alert"
                                    nodeRef={notificationMenuRef}
                                >
                                    <NotificationMenu
                                        notificationMenuRef={
                                            notificationMenuRef
                                        }
                                    />
                                </CSSTransition>
                            </Box>

                            <IconButton
                                color="inherit"
                                onClick={() => navigate('/profile')}
                            >
                                {profileImage ? (
                                    <Avatar
                                        sx={{ width: 24, height: 24 }}
                                        src={`data:image/jpeg;base64,${profileImage}`}
                                    />
                                ) : (
                                    <Avatar sx={{ width: 24, height: 24 }}>
                                        {currentUser.fullName[0].toUpperCase()}
                                    </Avatar>
                                )}
                            </IconButton>
                            {currentUser.roles.includes('admin') ? (
                                <Button
                                    color="inherit"
                                    onClick={() => navigate('/dashboard')}
                                >
                                    Dashboard
                                </Button>
                            ) : null}

                            <Button
                                color="inherit"
                                onClick={() => logoutHandler()}
                            >
                                logout
                            </Button>
                        </>
                    ) : (
                        <ProfileMenu />
                    )}
                    {!currentUser ? (
                        <>
                            <Button
                                color="inherit"
                                onClick={() => navigate('/login')}
                            >
                                Login
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => navigate('/register')}
                            >
                                Register
                            </Button>
                        </>
                    ) : null}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
