import routes from 'api/apiRoutes';
import * as requester from 'api/crud';

export const getRoomMesssages = async (roomId: string, userId: string, page: number) => {
    return await requester.get(routes.getRoomMessagesURL(roomId, userId, page));
};

export const sendFile = async (roomId: string, formData: FormData) => {
    return await requester.post(routes.sendFileURL(roomId), formData);
};
