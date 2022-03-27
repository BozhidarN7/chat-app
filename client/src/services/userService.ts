import * as requester from 'api/crud';
import routes from 'api/apiRoutes';

export const getUser = async (id: string) => {
    return await requester.get(routes.getUserURL(id));
};