const baseUrl = 'https://localhost:44325/api/v1';

const authRoutes = {
    registerURL: () => `${baseUrl}/auth/register`,
    loginURL: () => `${baseUrl}/auth/login`,
};

const users = {
    getUserURL: (id: string) => `${baseUrl}/users/${id}`,
};

const routes = {
    ...authRoutes,
    ...users,
};

export default routes;
