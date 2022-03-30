import { RegisterUser, LoginUser, Token } from 'interfaces/userInterfaces';
import * as requester from 'api/crud';
import routes from 'api/apiRoutes';

export const registerUser = async (data: RegisterUser) => {
    return await requester.post(routes.registerURL(), data);
};

export const loginUser = async (data: LoginUser) => {
    return await requester.post(routes.loginURL(), data);
};

export const revokeRefreshToken = async (id: string) => {
    return await requester.post(routes.revokeRefreshTokenURL(id), undefined);
};

export const refreshToken = async (data: Token) => {
    return await requester.post(routes.refreshTokenURL(), data);
};
