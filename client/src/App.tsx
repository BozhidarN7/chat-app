import { useMemo, useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ToastContainer } from 'react-toastify';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'react-toastify/dist/ReactToastify.css';

import AppRouter from 'AppRouter';
import { AuthProvider } from 'contexts/AuthCtx';
import { useChat } from 'contexts/ChatCtx';

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
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
