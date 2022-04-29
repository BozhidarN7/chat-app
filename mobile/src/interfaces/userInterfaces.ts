export interface LoginCredentials {
    email: string;
    password: string;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    fullName: string;
    profileImage: string | null;
    roles: string[];
}
