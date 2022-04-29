export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    fullName: string;
    profileImage: string | null;
    roles: string[];
}
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
}
