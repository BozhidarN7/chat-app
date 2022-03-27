import { RegisterUser } from 'interfaces/userInterfaces';
import * as requester from 'api/crud';
import routes from 'api/apiRoutes';

export const registerUser = async (data: RegisterUser) => {
    return await requester.post(routes.registerURL(), data);
};
