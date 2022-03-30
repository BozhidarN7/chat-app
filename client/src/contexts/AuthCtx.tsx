import React, { useContext, useState, useEffect } from 'react';

import {
    RegisterUser,
    LoginUser,
    CurrentUser,
} from 'interfaces/userInterfaces';
import { registerUser, loginUser } from 'services/authService';
import { getUser } from 'services/userService';
import inMemoryJwtService from 'services/inMemoryJwtService';

interface AuthCtxInterface {
    currentUser: CurrentUser;
    token: TokenProps;
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
    const [currentUser, setCurrentUser] = useState({} as CurrentUser);
    const [token, setToken] = useState<TokenProps>({} as TokenProps);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    // useEffect(() => {
    //     const userInfo = localStorage.getItem('userInfo');

    //     if (userInfo) {
    //         const userInfoData = JSON.parse(userInfo);
    //         getUser(userInfoData.id).then((res) => {
    //             const token = localStorage.getItem('token');

    //             if (token) {
    //                 setToken(token);
    //             }

    //             setCurrentUser(res.data.user);
    //             setIsAuthLoading(false);
    //         });
    //     } else {
    //         setIsAuthLoading(false);
    //     }
    // }, []);

    const signUp = async (inputData: RegisterUser) => {
        const outputData = await registerUser(inputData);

        setCurrentUser({
            ...outputData.data.user,
            fullName: `${outputData.data.user.firstName} ${outputData.user.lastName}`,
        });

        // setDataInLocalStorage(outputData.data.user, outputData.data.token);

        return outputData.message;
    };
    const signIn = async (inputData: LoginUser) => {
        const outputData = await loginUser(inputData);

        setCurrentUser({
            ...outputData.data.user,
            fullName: `${outputData.data.user.firstName} ${outputData.data.user.lastName}`,
        });

        const res = inMemoryJwtService.setToken({
            token: outputData.data.token,
            refreshToken: outputData.data.refreshToken,
            expiration: outputData.data.expiration,
        });
        console.log('here');
        console.log(res);

        // setDataInLocalStorage(outputData.data.user, outputData.data.token);

        return outputData.message;
    };

    const logout = () => {
        // localStorage.removeItem('userInfo');
        // localStorage.removeItem('token');
        setCurrentUser({} as CurrentUser);
        setToken({} as TokenProps);
    };

    // const setDataInLocalStorage = (userData: CurrentUser, token: string) => {
    //     localStorage.setItem(
    //         'userInfo',
    //         JSON.stringify({
    //             email: userData.email,
    //             id: userData.id,
    //             firstName: userData.firstName,
    //             lastName: userData.lastName,
    //             fullName: `${userData.firstName} ${userData.lastName}`,
    //         })
    //     );
    //     localStorage.setItem('token', token);
    // };

    const value = {
        currentUser,
        token,
        signUp,
        signIn,
        logout,
    };
    return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};
