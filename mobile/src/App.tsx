/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import AuthProvider from 'src/contexts/AuthCtx';
import AppNavigation from 'src/navigations/AppNavigation';

const App = () => {
    return (
        <AuthProvider>
            <AppNavigation />
        </AuthProvider>
    );
};

export default App;
