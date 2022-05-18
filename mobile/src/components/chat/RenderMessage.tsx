import React from 'react';

import Message from './Message';
import { FileMessage, TextMessage } from '../../interfaces/chatInterfaces';

const RenderMessage = ({ item: message }: any) => {
    const type = message.messageType;

    if (type === 'file') {
        message = message as FileMessage;

        return (
            <Message
                senderFullName={message.senderFullName}
                message={message.file}
                messageId={message.id}
                senderId={message.senderId}
                dateAndTime={message.messageDateAndTime}
                type={type}
                key={message.id}
            />
        );
    } else {
        message = message as TextMessage;

        return (
            <Message
                senderFullName={message.senderFullName}
                message={message.message}
                messageId={message.id}
                senderId={message.senderId}
                dateAndTime={message.messageDateAndTime}
                type={type}
                key={message.id}
            />
        );
    }
};

export default RenderMessage;
