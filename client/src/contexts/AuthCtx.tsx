import React, { useContext } from 'react';

import { RegisterUser, LoginUser } from 'interfaces/userInterfaces';
import { registerUser, loginUser } from 'services/authService';

interface AuthCtxInterface {
    signUp: any;
    signIn: any;
}

const AuthCtx = React.createContext<AuthCtxInterface>({} as AuthCtxInterface);

export const useAuth = () => {
    return useContext(AuthCtx);
};

type Props = {
    children: React.ReactNode[] | React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
    const signUp = async (data: RegisterUser) => {
        const token = await registerUser(data);
        console.log(token);
    };
    const signIn = async (data: LoginUser) => {
        const token = await loginUser(data);
        console.log(token);
    };
    const value = {
        signUp,
        signIn,
    };
    return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};
