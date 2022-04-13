import * as requester from 'api/crud';
import routes from 'api/apiRoutes';

export const getMessagesStatistic = async () => {
    return await requester.get(routes.getMessagesStatisticURL());
};
