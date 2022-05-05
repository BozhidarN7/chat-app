import * as crud from 'src/api/crud';
import routes from 'src/api/apiRoutes';

export const getUser = async (id: string) => {
    return await crud.get(routes.getUserURL(id));
};

export const getChats = async (id: string) => {
    return await crud.get(routes.getChatsURL(id));
};

export const getUserProfileImage = async (id: string) => {
    return await crud.get(routes.saveUserProfileImageURL(id));
};
