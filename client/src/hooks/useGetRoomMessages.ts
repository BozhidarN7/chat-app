import { useEffect, useState } from 'react';

import { getRoomMesssages } from 'services/messageService';
import { loadMorePreviousMessages } from 'features/chatsSlice';
import { useAppDispatch } from 'app/hooks';

const useGetRoomMessages = (roomId: string, userId: string, page: number) => {
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (page > 1) {
            setLoading(true);
            setError(false);
            getRoomMesssages(roomId, userId, page)
                .then((data) => {
                    const combine = [...data.data.messages, ...data.data.files].sort(
                        (a, b) =>
                            (new Date(a.messageDateAndTime) as any) - (new Date(b.messageDateAndTime) as any)
                    );
                    dispatch(
                        loadMorePreviousMessages({
                            roomId,
                            messages: combine,
                        })
                    );
                    setHasMore(data.data.count > 0);
                    setLoading(false);
                })
                .catch((e) => setError(true));
        }
    }, [dispatch, roomId, userId, page]);

    return { loading, error, hasMore };
};

export default useGetRoomMessages;
