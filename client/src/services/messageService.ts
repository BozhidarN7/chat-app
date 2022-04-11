import routes from 'api/apiRoutes';
import * as requester from 'api/crud';

export const getRoomMesssages = async (
    roomId: string,
    userId: string,
    page: number
) => {
    return await requester.get(
        routes.getAllRoomMessagesURL(roomId, userId, page)
    );
};

export const sendFile = async (roomId: string, formData: FormData) => {
    return await requester.post(routes.sendFileURL(roomId), formData);
};

export const deleteMessage = async (
    messageId: string,
    userId: string,
    type: string
) => {
    return await requester.del(
        routes.deleteMessageURL(messageId, userId, type)
    );
};

export const editMessage = async (
    messageId: string,
    userId: string,
    data: any
) => {
    return await requester.put(routes.editMessageURL(messageId, userId), data);
};
