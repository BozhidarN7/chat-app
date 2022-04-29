import * as crud from 'src/api/crud';
import routes from 'src/api/apiRoutes';

export const getUser = async (id: string) => {
    return await crud.get(routes.getUserURL(id));
};
