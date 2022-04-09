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
    getNewFriendShipRequestsURL: (id: string) => `${baseUrl}/users/${id}/friendship-requests/new`,
    getChatsURL: (id: string) => `${baseUrl}/users/${id}/rooms`,
};

const friendshipRequests = {
    getNewFriendshipRequestURL: (friendshipId: string) =>
        `${baseUrl}/friendship-requests/new/${friendshipId}`,
    acceptRejectFriendshipRequestURL: (friendshipId: string) =>
        `${baseUrl}/friendship-requests/${friendshipId}`,
};

const messages = {
    getRoomMessagesURL: (roomId: string, userId: string, page: number) =>
        `${baseUrl}/messages/${roomId}?userId=${userId}&page=${page}`,
};

const rooms = {
    sendFileURL: (roomId: string) => `${baseUrl}/rooms/${roomId}/files`,
};

const routes = {
    ...authRoutes,
    ...users,
    ...friendshipRequests,
    ...messages,
    ...rooms,
};

export default routes;
