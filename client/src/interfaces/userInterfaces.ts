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

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    fullName: string;
}

export interface Token {
    accessToken: string;
    refreshToken: string;
}

export interface FriendshipRequest {
    senderId: string;
    senderFullName: string;
}
