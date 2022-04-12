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
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useAuth } from 'contexts/AuthCtx';
import { useAppSelector } from 'app/hooks';
import NotificationMenu from 'components/menus/NotificationMenu';

const Header = () => {
    const navigate = useNavigate();
    const notificationMenuRef = useRef(null);
    const [showNotificationMenu, setShowNotificationMenu] = useState(false);
    const { currentUser, logout } = useAuth();
    const newFriendShipRequests = useAppSelector(
        (state) => state.users.newFriendshipRequests
    );

    const showNotificationMenuHandler = () => {
        setShowNotificationMenu(true);
    };

    const hideNotificationMenuHandler = () => {
        setShowNotificationMenu(false);
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
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        ChatApp
                    </Typography>
                    {currentUser?.id ? (
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
                                        sx={{ mr: 2 }}
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

                            <Button
                                color="inherit"
                                onClick={() => navigate('/profile')}
                            >
                                profile
                            </Button>
                            <Button color="inherit" onClick={() => logout()}>
                                logout
                            </Button>
                        </>
                    ) : (
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
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
