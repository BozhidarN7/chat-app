const baseUrl = 'https://localhost:44325/api/v1';

const authRoutes = {
    registerURL: () => `${baseUrl}/auth/register`,
    loginURL: () => `${baseUrl}/auth/login`,
    refreshTokenURL: () => `${baseUrl}/auth/refresh-token`,
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
