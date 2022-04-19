import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles: any = makeStyles((theme: any) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
        cursor: 'pointer',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#5AFF3D',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
}));

const AuthButtons = () => {
    const navigate = useNavigate();

    return (
        <>
            <Button
                onClick={() => navigate('/login')}
                sx={{ mr: 2, mt: { sm: 0, xs: 2 }, color: 'white' }}
                variant="text"
            >
                Sign In
            </Button>
            <Button
                onClick={() => navigate('/register')}
                sx={{ color: 'white', mt: { sm: 0, xs: 2 } }}
                variant="text"
            >
                Sign Up
            </Button>
        </>
    );
};

const LandingPageHeader = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <div className={classes.root}>
                <AppBar
                    sx={{ background: 'none' }}
                    className={classes.appbar}
                    elevation={0}
                >
                    <Toolbar className={classes.appbarWrapper}>
                        {!isSmall ? (
                            <h1
                                onClick={() => navigate('/')}
                                className={classes.appbarTitle}
                            >
                                Chat
                                <span className={classes.colorText}>App</span>
                            </h1>
                        ) : null}

                        {!isSmall ? <AuthButtons /> : null}
                    </Toolbar>
                </AppBar>

                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        component="h1"
                        sx={{
                            color: '#fff',
                            fontSize: {
                                lg: '4.5rem',
                                md: '3.5rem',
                                sm: '3rem',
                                xs: '2rem',
                            },
                        }}
                    >
                        Welcome to <br />
                        Chat
                        <Typography
                            component="span"
                            sx={{ color: '#5AFF3D', fontSize: 'inherit' }}
                        >
                            App.
                        </Typography>
                    </Typography>
                    {isSmall ? <AuthButtons /> : null}
                </Box>
            </div>
        </>
    );
};

export default LandingPageHeader;
