/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';

import { store } from './app/store';
import AuthProvider from './contexts/AuthCtx';
import ChatProvider from './contexts/ChatCtx';
import InitialComponent from './InitialComponent';
import * as SecureStore from 'expo-secure-store';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
    // useEffect(() => {
    //     (async () => {
    //         await SecureStore.deleteItemAsync('token');
    //         await SecureStore.deleteItemAsync('user');
    //     })();
    // }, []);

    return (
        <Provider store={store}>
            <AuthProvider>
                <ChatProvider>
                    <InitialComponent />
                </ChatProvider>
            </AuthProvider>
        </Provider>
    );
};

export default App;
