interface Message {
    id: string;
    messageDateAndTime: string;
    senderFullName: string;
    messageType: string;
}

export interface Chat {
    friendId: string;
    firendFullName: string;
    roomId: string;
    messages: Array<FileMessage | TextMessage>;
}

export interface TextMessage extends Message {
    message: string;
}

export interface FileMessage extends Message {
    file: string;
}
