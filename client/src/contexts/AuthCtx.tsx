import React, { useContext, useState, useEffect } from 'react';

import { RegisterUser, LoginUser, User } from 'interfaces/userInterfaces';
import { registerUser, loginUser, revokeRefreshToken } from 'services/authService';
import { getUser } from 'services/userService';
import inMemoryJwtService from 'services/inMemoryJwtService';

interface AuthCtxInterface {
    currentUser: User | null;
    token: TokenProps;
    saveUserProfileImage: any;
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

type TokenProps = {
    token: string;
    tokenExpirationDate: Date;
    refreshToken: string;
};

export const AuthProvider = ({ children }: Props) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [token, setToken] = useState<TokenProps>({} as TokenProps);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');
        const expiration = localStorage.getItem('expiration');

        if (userInfo && token && refreshToken && expiration) {
            const userInfoData = JSON.parse(userInfo);
            getUser(userInfoData.id).then((res) => {
                setCurrentUser(res.data.user);
                setIsAuthLoading(false);
                inMemoryJwtService.setToken({
                    token,
                    refreshToken,
                    expiration: new Date(expiration),
                });
            });
        } else {
            setIsAuthLoading(false);
        }
    }, []);

    const signUp = async (inputData: RegisterUser) => {
        try {
            const outputData = await registerUser(inputData);
            setCurrentUser({
                ...outputData.data.user,
                fullName: `${outputData.data.user.firstName} ${outputData.data.user.lastName}`,
            });

            inMemoryJwtService.setToken({
                token: outputData.data.token,
                refreshToken: outputData.data.refreshToken,
                expiration: outputData.data.expiration,
            });

            setDataInLocalStorage(outputData.data.user);

            return outputData.message;
        } catch (err) {
            return 'Register failed';
        }
    };
    const signIn = async (inputData: LoginUser) => {
        try {
            const outputData = await loginUser(inputData);

            setCurrentUser({
                ...outputData.data.user,
                fullName: `${outputData.data.user.firstName} ${outputData.data.user.lastName}`,
            });

            inMemoryJwtService.setToken({
                token: outputData.data.token,
                refreshToken: outputData.data.refreshToken,
                expiration: outputData.data.expiration,
            });

            setDataInLocalStorage(outputData.data.user);

            return outputData.message;
        } catch (err) {
            return 'Login failed';
        }
    };

    const logout = () => {
        if (!currentUser) {
            return;
        }

        revokeRefreshToken(currentUser.id);
        inMemoryJwtService.deleteToken();
        setCurrentUser(null);
        setToken({} as TokenProps);
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    };

    const saveUserProfileImage = (profileImage: string) => {
        setCurrentUser((prev) => {
            return { ...prev, profileImage } as User;
        });
    };

    const setDataInLocalStorage = (userData: User) => {
        localStorage.setItem(
            'userInfo',
            JSON.stringify({
                email: userData.email,
                id: userData.id,
                firstName: userData.firstName,
                lastName: userData.lastName,
                fullName: `${userData.firstName} ${userData.lastName}`,
            })
        );
    };

    const value = {
        currentUser,
        token,
        saveUserProfileImage,
        signUp,
        signIn,
        logout,
    };
    return <AuthCtx.Provider value={value}>{!isAuthLoading && children}</AuthCtx.Provider>;
};
