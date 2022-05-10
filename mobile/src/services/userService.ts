import * as crud from 'src/api/crud';
import routes from 'src/api/apiRoutes';
import { User } from '../interfaces/userInterfaces';

export const getUser = async (id: string) => {
    return await crud.get(routes.getUserURL(id));
};

export const getAllUsers = async () => {
    return await crud.get(routes.getAllUsersURL());
};

export const getChats = async (id: string) => {
    return await crud.get(routes.getChatsURL(id));
};

export const getUserProfileImage = async (id: string) => {
    return await crud.get(routes.saveUserProfileImageURL(id));
};

export const getNewFriendShipRequests = async (id: string) => {
    return await crud.get(routes.getNewFriendShipRequestsURL(id));
};
