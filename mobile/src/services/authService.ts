import { LoginCredentials } from 'src/interfaces/userInterfaces';
import routes from 'src/api/apiRoutes';
import * as crud from 'src/api/crud';

export const signIn = async (loginCredentials: LoginCredentials) => {
    return await crud.post(routes.loginURL(), loginCredentials);
};
