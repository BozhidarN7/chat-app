import React, { useContext, useState, useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import tw from 'twrnc';
import * as SecureStore from 'expo-secure-store';

import { User, LoginCredentials } from 'src/interfaces/userInterfaces';
import * as authService from 'src/services/authService';
import * as userService from 'src/services/userService';
import Spinner from 'src/components/common/genneral/Spinner';

interface AuthCtxInterface {
    currentUser: User;
    token: string | null;
    isSignIn: boolean;
    signIn: any;
    logout: any;
}

const AuthCtx = React.createContext<AuthCtxInterface>({} as AuthCtxInterface);

export const useAuth = () => useContext(AuthCtx);

type Props = {
    children: React.ReactNode[] | React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const token = await SecureStore.getItemAsync('token');
            const userData = await SecureStore.getItemAsync('user');
            if (token && userData) {
                const user = JSON.parse(userData);
                const res = await userService.getUser(user.id);
                const data = res.data;
                setCurrentUser(data.data.user);
                setToken(token);
                setIsSignIn(true);
            }
            setIsAuthLoading(false);
        })();
    }, []);

    const signIn = async (loginCredentials: LoginCredentials) => {
        const res = await authService.signIn(loginCredentials);
        const data = res.data;

        const user = data.data.user;
        const token = data.data.token;

        setCurrentUser(user);
        setToken(token);
        setIsSignIn(true);

        await SecureStore.setItemAsync('token', token);
        await SecureStore.setItemAsync('user', JSON.stringify(user));
    };

    const logout = async () => {
        setCurrentUser({} as User);
        setToken(null);
        setIsSignIn(false);

        await SecureStore.deleteItemAsync('token');
        await SecureStore.deleteItemAsync('user');
    };

    const value = {
        currentUser,
        isSignIn,
        token,
        signIn,
        logout,
    };

    return (
        <AuthCtx.Provider value={value}>
            {isAuthLoading ? <Spinner text="Loading" /> : children}
        </AuthCtx.Provider>
    );
};

export default AuthProvider;
