import { useMemo, useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ToastContainer } from 'react-toastify';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'react-toastify/dist/ReactToastify.css';

import AppRouter from 'routes/AppRouter';
import { useChat } from 'contexts/ChatCtx';
import { useAuth } from 'contexts/AuthCtx';
import { useAppDispatch } from 'app/hooks';
import {
    fetchNewFriendRequests,
    fetchNewFriendRequest,
    profileImageChanged,
} from 'features/usersSlice';
import { getUserProfileImage } from 'services/userService';
import { fetchChats, newChatAdded } from 'features/chatsSlice';

function App() {
    const dispatch = useAppDispatch();
    const { saveConnection, connection } = useChat();
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

                connection?.on('AcceptFriendship', (data) => {
                    if (currentUser?.fullName !== data.senderFullName) {
                        dispatch(
                            newChatAdded({
                                friendFullName: data.senderFullName,
                                friendId: data.senderId,
                                roomId: data.roomId,
                            })
                        );
                    } else {
                        dispatch(
                            newChatAdded({
                                friendFullName: data.receiverFullName,
                                friendId: data.receiverId,
                                roomId: data.roomId,
                            })
                        );
                    }
                });

                await connection.start();
                saveConnection(connection);
            }
        })();
    }, [token, saveConnection, currentUser?.fullName, dispatch]);

    useEffect(() => {
        (async () => {
            if (currentUser) {
                const data = await getUserProfileImage(currentUser.id);

                dispatch(fetchNewFriendRequests(currentUser.id));
                dispatch(fetchChats(currentUser.id));

                if (data.success) {
                    dispatch(profileImageChanged(data.data.profileImage));
                }
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

    connection?.on('ReceiveInvitation', (friendshipId) => {
        dispatch(fetchNewFriendRequest(friendshipId));
    });

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
            <ToastContainer autoClose={2000} />
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
