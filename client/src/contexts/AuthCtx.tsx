import React, { useContext, useState, useEffect } from 'react';

import { RegisterUser, LoginUser, CurrentUser } from 'interfaces/userInterfaces';
import { registerUser, loginUser } from 'services/authService';
import { getUser } from 'services/userService';

interface AuthCtxInterface {
    currentUser: CurrentUser;
    token: string;
    signUp: any;
    signIn: any;
    logout: any;
}

const AuthCtx = React.createContext<AuthCtxInterface>({} as AuthCtxInterface);

export const useAuth = () => {
    return useContext(AuthCtx);
};

type Props = {
    children: React.ReactNode[] | React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
    const [currentUser, setCurrentUser] = useState({} as CurrentUser);
    const [token, setToken] = useState('');
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            const userInfoData = JSON.parse(userInfo);
            getUser(userInfoData.id).then((res) => {
                const token = localStorage.getItem('token');

                if (token) {
                    setToken(token);
                }

                setCurrentUser(res.data.user);
                setIsAuthLoading(false);
            });
        }
    }, []);

    const signUp = async (inputData: RegisterUser) => {
        const outputData = await registerUser(inputData);

        setCurrentUser(outputData.data.user);
        setToken(outputData.data.token);
        setDataInLocalStorage(outputData.data.user, token);

        return outputData.message;
    };
    const signIn = async (inputData: LoginUser) => {
        const outputData = await loginUser(inputData);

        setCurrentUser(outputData.data.user);
        setToken(outputData.data.token);
        setDataInLocalStorage(outputData.data.user, token);

        return outputData.message;
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
        setCurrentUser({} as CurrentUser);
        setToken('');
    };

    const setDataInLocalStorage = (userData: CurrentUser, token: string) => {
        localStorage.setItem('userInfo', JSON.stringify({ email: userData.email, id: userData.id }));
        localStorage.setItem('token', token);
    };

    const value = {
        currentUser,
        token,
        signUp,
        signIn,
        logout,
    };
    return <AuthCtx.Provider value={value}>{!isAuthLoading && children}</AuthCtx.Provider>;
};
