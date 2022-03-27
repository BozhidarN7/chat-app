import { RegisterUser } from 'interfaces/userInterfaces';
import React, { useContext } from 'react';
import { registerUser } from 'services/authService';

interface AuthCtxInterface {
    signUp: any;
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
    const value = {
        signUp,
    };
    return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};
