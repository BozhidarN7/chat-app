interface Message {
    id: string;
    messageDateAndTime: string;
    senderFullName: string;
    senderId: string;
    messageType: string;
}

export interface Chat {
    friendId: string;
    friendFullName: string;
    roomId: string;
    messages: Array<FileMessage | TextMessage>;
}

export interface TextMessage extends Message {
    message: string;
}

export interface FileMessage extends Message {
    file: string;
}

export interface EditMessageOptions {
    messageId: string;
    message: string;
    isEditActivated: boolean;
}
