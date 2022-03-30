import { useMemo, useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ToastContainer } from 'react-toastify';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'react-toastify/dist/ReactToastify.css';

import AppRouter from 'AppRouter';
import { useChat } from 'contexts/ChatCtx';
import { refreshToken } from 'services/authService';
import inMemoryJwtService from 'services/inMemoryJwtService';

function App() {
    const { saveConnection } = useChat();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    useEffect(() => {
        (async () => {
            const connection = new HubConnectionBuilder()
                .withUrl('https://localhost:44325/api/v1/chat')
                .withAutomaticReconnect()
                .configureLogging(LogLevel.Information)
                .build();

            await connection.start();
            saveConnection(connection);
        })();
    }, []);

    useEffect(() => {
        refreshToken({
            accessToken: sessionStorage.getItem('token')!,
            refreshToken: sessionStorage.getItem('refreshToken')!,
        }).then((data) => {
            inMemoryJwtService.setToken(data.data);
        });
    }, []);

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
