declare module 'userInterfaces' {
    interface LoginCredentials {
        email: string;
        password: string;
    }

    interface User {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        fullName: string;
        profileImage: string | null;
        roles: string[];
    }

    export = User;
}
