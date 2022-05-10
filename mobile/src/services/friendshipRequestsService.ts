import * as crud from 'src/api/crud';
import routes from 'src/api/apiRoutes';

export const getNewFriendShipRequest = async (friendshipId: string) => {
    return await crud.get(routes.getNewFriendshipRequestURL(friendshipId));
};

export const acceptRejectFriendshipRequest = async (
    answer: boolean,
    friendshipId: string
) => {
    await crud.post(routes.acceptRejectFriendshipRequestURL(friendshipId), {
        answer,
    });
};
