export interface RegisterUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    rePassword: string;
}

export interface LoginUser {
    email: string;
    password: string;
}
