export const baseUrl = 'https://localhost:44325/api/v1';

const authRoutes = {
    registerURL: () => `${baseUrl}/auth/register`,
    loginURL: () => `${baseUrl}/auth/login`,
    refreshTokenURL: () => `${baseUrl}/auth/refresh-token`,
    revokeRefreshTokenURL: (id: string) => `${baseUrl}/auth/revoke/${id}`,
};

const users = {
    getUserURL: (id: string) => `${baseUrl}/users/${id}`,
    getAllUsersURL: (query: string | undefined = undefined) => {
        if (query) {
            return `${baseUrl}/users?fullName=${query}`;
        }

        return `${baseUrl}/users`;
    },
    getFriendsURL: (id: string) => `${baseUrl}/users/${id}/friends`,
    getNewFriendShipRequestsURL: (id: string) =>
        `${baseUrl}/users/${id}/friendship-requests/new`,
};

const friendshipRequests = {
    getNewFriendshipRequestURL: (friendshipId: string) =>
        `${baseUrl}/friendship-requests/new/${friendshipId}`,
};

const routes = {
    ...authRoutes,
    ...users,
    ...friendshipRequests,
};

export default routes;
