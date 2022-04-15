import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

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
const LandingPageHeader = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar
                    sx={{ background: 'none' }}
                    className={classes.appbar}
                    elevation={0}
                >
                    <Toolbar className={classes.appbarWrapper}>
                        <h1
                            onClick={() => navigate('/')}
                            className={classes.appbarTitle}
                        >
                            Chat<span className={classes.colorText}>App</span>
                        </h1>
                        <Button
                            onClick={() => navigate('/login')}
                            sx={{ mr: 2, color: 'white' }}
                            variant="text"
                        >
                            Sign In
                        </Button>
                        <Button
                            onClick={() => navigate('/register')}
                            sx={{ color: 'white' }}
                            variant="text"
                        >
                            Sign Up
                        </Button>
                    </Toolbar>
                </AppBar>

                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br />
                        Chat<span className={classes.colorText}>App.</span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default LandingPageHeader;
