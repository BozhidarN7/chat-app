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
    getChatsURL: (id: string) => `${baseUrl}/users/${id}/rooms`,
    saveUserProfileImageURL: (id: string) => `${baseUrl}/users/${id}/photo`,
    getUserProfileImageURL: (id: string) => `${baseUrl}/users/${id}/photo`,
};

const friendshipRequests = {
    getNewFriendshipRequestURL: (friendshipId: string) =>
        `${baseUrl}/friendship-requests/new/${friendshipId}`,
    acceptRejectFriendshipRequestURL: (friendshipId: string) =>
        `${baseUrl}/friendship-requests/${friendshipId}`,
};

const messages = {
    deleteMessageURL: (messageId: string, userId: string, type: string) =>
        `${baseUrl}/messages/${messageId}?userId=${userId}&type=${type}`,
    editMessageURL: (messageId: string, userId: string) =>
        `${baseUrl}/messages/${messageId}?userId=${userId}`,
};

const rooms = {
    getAllRoomMessagesURL: (roomId: string, userId: string, page: number) =>
        `${baseUrl}/rooms/${roomId}/messages?userId=${userId}&page=${page}`,
    sendFileURL: (roomId: string) => `${baseUrl}/rooms/${roomId}/files`,
};

const admin = {
    getMessagesStatisticURL: () => `${baseUrl}/admin/statisics/messages`,
};

const routes = {
    ...authRoutes,
    ...users,
    ...friendshipRequests,
    ...messages,
    ...rooms,
    ...admin,
};

export default routes;
