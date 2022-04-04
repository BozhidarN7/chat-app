import { useMemo, useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ToastContainer } from 'react-toastify';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'react-toastify/dist/ReactToastify.css';

import AppRouter from 'routes/AppRouter';
import inMemoryJwtService from 'services/inMemoryJwtService';
import { useChat } from 'contexts/ChatCtx';
import { refreshToken as refreshTokenHandler } from 'services/authService';
import { useAuth } from 'contexts/AuthCtx';
import { useAppDispatch } from 'app/hooks';
import { fetchNewFriendRequests } from 'features/usersSlice';

function App() {
    const dispatch = useAppDispatch();
    const { saveConnection } = useChat();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const token = localStorage.getItem('token');
    const { currentUser } = useAuth();
    useEffect(() => {
        (async () => {
            if (token) {
                const connection = new HubConnectionBuilder()
                    .withUrl('https://localhost:44325/api/v1/chat', {
                        accessTokenFactory: () => token,
                    })
                    .withAutomaticReconnect()
                    .configureLogging(LogLevel.Information)
                    .build();

                await connection.start();
                saveConnection(connection);
            }
        })();
    }, [token]);

    useEffect(() => {
        (async () => {
            if (currentUser) {
                dispatch(fetchNewFriendRequests(currentUser.id));
            }
        })();
    }, [currentUser, dispatch]);

    // useEffect(() => {
    //     const accessToken = localStorage.getItem('token');
    //     const refreshToken = localStorage.getItem('refreshToken');

    //     if (accessToken && refreshToken) {
    //         refreshTokenHandler({
    //             accessToken,
    //             refreshToken,
    //         }).then((data: any) => {
    //             inMemoryJwtService.setToken(data.data);
    //         });
    //     }
    // }, []);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'light' : 'light',
                },
            }),
        [prefersDarkMode]
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
