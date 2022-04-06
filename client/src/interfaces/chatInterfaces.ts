export interface Chat {
    friendId: string;
    firendFullName: string;
    roomId: string;
    messages: Message[];
}

export interface Message {
    message: string;
    messageDateTime: string;
    senderFullName: string;
}
