const baseUrl = 'https://localhost:44325/api/v1';

const authRoutes = {
    registerURL: () => `${baseUrl}/auth/register`,
    loginURL: () => `${baseUrl}/auth/login`,
    refreshTokenURL: () => `${baseUrl}/auth/refresh-token`,
    revokeRefreshTokenURL: (id: string) => `${baseUrl}/auth/revoke/${id}`,
};

const users = {
    getUserURL: (id: string) => `${baseUrl}/users/${id}`,
    getAllUsersURL: () => `${baseUrl}/users`,
    getFriendsURL: (id: string) => `${baseUrl}/users/${id}/friends`,
};

const routes = {
    ...authRoutes,
    ...users,
};

export default routes;
