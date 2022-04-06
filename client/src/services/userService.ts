import * as requester from 'api/crud';
import routes from 'api/apiRoutes';
import { User } from 'interfaces/userInterfaces';

export const getUser = async (id: string) => {
    return await requester.get(routes.getUserURL(id));
};

export const getAllUsers = async () => {
    return await requester.get(routes.getAllUsersURL());
};

export const getFriends = async (id: string) => {
    return await requester.get(routes.getFriendsURL(id));
};

export const debounceGetMatchedUsers = async (
    matchedUsers: User[],
    query: string,
    timeout: number = 300
) => {
    let timer: number = 0;

    clearTimeout(timer);
    timer = window.setTimeout(async () => {
        matchedUsers.push(...(await getMatchedUsers(query)).data.users);
    }, timeout);
};

export const getMatchedUsers = async (query: string) => {
    return await requester.get(routes.getAllUsersURL(query));
};

export const getNewFriendShipRequests = async (id: string) => {
    return await requester.get(routes.getNewFriendShipRequestsURL(id));
};

export const getChats = async (id: string) => {
    return await requester.get(routes.getChatsURL(id));
};

export const filterUsers = (
    users: User[],
    query: string,
    currentUserId: string
) => {
    return users
        .filter(
            (u) =>
                u.fullName.toLowerCase().includes(query.toLowerCase()) &&
                u.id !== currentUserId
        )
        .sort((a, b) => {
            const nameA = a.fullName.toLowerCase();
            const nameB = b.fullName.toLowerCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
};
