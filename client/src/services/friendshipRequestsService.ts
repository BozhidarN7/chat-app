import * as requester from 'api/crud';
import routes from 'api/apiRoutes';

export const getNewFriendShipRequest = async (friendshipId: string) => {
    return await requester.get(routes.getNewFriendshipRequestURL(friendshipId));
};
