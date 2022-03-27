import { useMemo, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as requester from 'api/crud';

import 'react-toastify/dist/ReactToastify.css';

import AppRouter from 'AppRouter';

function App() {
    useEffect(() => {
        (async () => {
            const data = await requester.get('https://localhost:44325/api/v1/auth/test');
            console.log(data);
        })();
    }, []);

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

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
