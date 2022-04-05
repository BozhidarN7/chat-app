import * as requester from 'api/crud';
import routes from 'api/apiRoutes';

export const getNewFriendShipRequest = async (friendshipId: string) => {
    return await requester.get(routes.getNewFriendshipRequestURL(friendshipId));
};

export const acceptRejectFriendshipRequest = async (
    answer: boolean,
    friendshipId: string
) => {
    await requester.post(
        routes.acceptRejectFriendshipRequestURL(friendshipId),
        { answer }
    );
};
