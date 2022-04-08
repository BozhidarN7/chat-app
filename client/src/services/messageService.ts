import routes from 'api/apiRoutes';
import * as requester from 'api/crud';

export const getRoomMesssages = async (
    roomId: string,
    userId: string,
    page: number
) => {
    return await requester.get(routes.getRoomMessagesURL(roomId, userId, page));
};
