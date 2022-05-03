/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import AuthProvider from 'src/contexts/AuthCtx';
import AppNavigation from 'src/navigations/AppNavigation';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
    return (
        <AuthProvider>
            <AppNavigation />
        </AuthProvider>
    );
};

export default App;
