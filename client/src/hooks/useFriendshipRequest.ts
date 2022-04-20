import { toast } from 'react-toastify';

import { useAppDispatch } from 'app/hooks';
import { friendshipRequestDeleted } from 'features/usersSlice';
import { acceptRejectFriendshipRequest } from 'services/friendshipRequestsService';
import { useChat } from 'contexts/ChatCtx';

const useFriendshipRequest = () => {
    const dispatch = useAppDispatch();
    const { acceptFriendship } = useChat();

    const acceptFriendshipHandler = async (friendshipId: string) => {
        try {
            await acceptRejectFriendshipRequest(true, friendshipId);
            await dispatch(friendshipRequestDeleted(friendshipId));
            await acceptFriendship(friendshipId);
            toast.success('Friendship request accepted');
        } catch (err) {
            console.log(err);
        }
    };

    const rejectFriendshipHandler = async (friendshipId: string) => {
        try {
            await acceptRejectFriendshipRequest(false, friendshipId);
            dispatch(friendshipRequestDeleted(friendshipId));
            toast.success('Friendship request rejected');
        } catch (err) {
            console.log(err);
        }
    };

    return {
        acceptFriendshipHandler,
        rejectFriendshipHandler,
    };
};

export default useFriendshipRequest;
