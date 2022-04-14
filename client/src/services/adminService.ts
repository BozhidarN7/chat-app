import * as requester from 'api/crud';
import routes from 'api/apiRoutes';

export const getMessagesStatistic = async () => {
    return await requester.get(routes.getMessagesStatisticURL());
};

export const getNewlyRegisterUsers = async () => {
    return await requester.get(routes.getNewlyRegisterUsers());
};

export const getUsersWithMostMessages = async () => {
    return await requester.get(routes.getUsersWithMostMessages());
};
