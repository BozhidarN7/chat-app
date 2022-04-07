export interface Chat {
    friendId: string;
    firendFullName: string;
    roomId: string;
    messages: Message[];
}

export interface Message {
    id: string;
    message: string;
    messageDateAndTime: string;
    senderFullName: string;
}
